import './navbar.css'
import { NavLink, Link } from 'react-router-dom'
import img from '/logo.png'

function navbar(){
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={img} alt="Logo" /></Link>
            </div>
            <div className="links">
                <ul>
                    <li><NavLink to="/home/home.jsx" className="li">Home</NavLink></li>
                    <li><NavLink to="/donate.jsx" className="li">Donate</NavLink></li>
                    <li><NavLink to="/blog.jsx" className="li">Blogs</NavLink></li>
                    <li><NavLink to="/aboutus.jsx" className="li">About Us</NavLink></li>
                    <li className='btn'><Link to="/login.jsx">LogIn</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar
