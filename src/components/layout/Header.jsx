import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import '../../assets/css/header.css';
import { setSearch } from "../../reducers/booksSlice";
import useToast from '../../hooks/useToast';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { successToast } = useToast();

    const handleLogout = () => {
        localStorage.removeItem('token');
        successToast('Logout successfully.')
        navigate('/signin', { replace: true });
    }

    return (
        <header className="header">
            <h1>📚 My Book Dashboard</h1>
            <input
                type="text"
                placeholder="Search books..."
                onChange={ (e) => dispatch(setSearch(e.target.value)) }
            />
            <button className="logout-btn" onClick={ handleLogout }>
                Logout
            </button>
        </header>
    );
};

export default Header;
