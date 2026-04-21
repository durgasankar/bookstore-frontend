import { useDispatch } from "react-redux";
import '../../assets/css/header.css';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className="header">
            <h1>📚 My Book Dashboard</h1>
            <input
                type="text"
                placeholder="Search books..."
                // onChange={ (e) => dispatch(setSearch(e.target.value)) }
            />
        </header>
    );
};

export default Header;
