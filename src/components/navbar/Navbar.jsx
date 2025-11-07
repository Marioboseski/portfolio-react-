import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navigation-bar">
            <ul className="nav-bar-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="about">About</Link></li>
                <li><Link className="nav-link" to="projects">Projects</Link></li>
                <li><Link className="nav-link" to="contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

