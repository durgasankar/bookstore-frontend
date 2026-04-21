
import { useState } from 'react';
import '../assets/css/dashboard.css';
import AddBookModal from '../components/books/AddBookModal';
import AddBook from '../components/books/AddBookModal';
import BookFilter from '../components/books/BookFilter';
import BookList from '../components/books/BookList';
import CustomButton from '../components/common/CustomButton';

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

            <AddBookModal
                open={ open }
                onClose={ () => setOpen(false) }
            />

        </div>
    );
};

export default Dashboard;
