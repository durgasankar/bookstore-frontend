
import { lazy, Suspense, useState } from 'react';
import '../assets/css/dashboard.css';
import BookFilter from '../components/books/BookFilter';
import BookList from '../components/books/BookList';
import CustomButton from '../components/common/CustomButton';
// import AddBookModal from '../components/books/AddBookModal';
const AddBookModal = lazy(() => import("../components/books/AddBookModal"));


const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="dashboard">
            <div className="dashboard-actions">
                <BookFilter />
                <CustomButton onClick={ () => setOpen(true) }>
                    Add a new Book
                </CustomButton>
            </div>
            <BookList />
            { open && (
                <Suspense fallback={ null }>
                    <AddBookModal
                        open={ open }
                        onClose={ () => setOpen(false) }
                    />
                </Suspense>
            ) }
        </div>
    );
};

export default Dashboard;
