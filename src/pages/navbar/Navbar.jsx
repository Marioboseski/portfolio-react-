import { Link } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Navbar = () => {
    
    return (
        <div>
            <Link to="/"></Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="contact">Contact</Link>
        </div>
    );
}

export default Navbar;