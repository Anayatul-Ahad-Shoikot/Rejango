import './navbar.css'
import { NavLink, Link } from 'react-router-dom'


function navbar(){
  return (
    <nav>
        <div className="site-logo">
            <Link to='/'>Site Name</Link>
        </div>

        <ul>
            <li>
                <NavLink to="/home.jsx">Home</NavLink>
            </li>
            <li>
                <NavLink  to="/services.jsx">Services</NavLink>
            </li>
            <li>
                <NavLink  to="/aboutus.jsx">AboutUs</NavLink>
            </li>
            <li>
                <button>LogIn</button>
            </li>
        </ul>
    </nav>
  )
}

export default navbar
