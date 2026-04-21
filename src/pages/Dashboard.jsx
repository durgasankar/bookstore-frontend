
import '../assets/css/dashboard.css';
import AddBook from '../components/books/AddBook';
import BookFilter from '../components/books/BookFilter';
import BookList from '../components/books/BookList';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-actions">
                <AddBook />
                <BookFilter />
            </div>
            <BookList />
        </div>
    );
};

export default Dashboard;
