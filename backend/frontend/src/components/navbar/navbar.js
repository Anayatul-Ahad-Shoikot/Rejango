import './navbar.css'
import { NavLink, Link } from 'react-router-dom'
// import img from '/logo.png'

function navbar(){
    return (
        <nav>
            <div className="logo">
                {/* <Link to="/"><img src={img} alt="Logo" /></Link> */}
            </div>
            <div className="links">
                <ul>
                    <li><NavLink to="./pages/home/home.js" className="li">Home</NavLink></li>
                    <li><NavLink to="./pages/donate.js" className="li">Donate</NavLink></li>
                    <li><NavLink to="./pages/blog.js" className="li">Blogs</NavLink></li>
                    <li><NavLink to="./pages/aboutus.js" className="li">About Us</NavLink></li>
                    <li className='btn'><Link to="./pages/login.js">LogIn</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar
