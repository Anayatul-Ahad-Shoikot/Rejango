import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="custom-navbar">
            <div className="navbar-container">
                <NavLink to="/home/home.jsx" className="logo">
                    <img src="/logo.png" alt="Logo" width={160} height={30} />
                </NavLink>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/donate" className="li">Donate</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services.jsx" className="li">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus.jsx" className="li">About Us</NavLink>
                    </li>
                    <li className="btn">
                        <NavLink to="/login.jsx">LogIn</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
