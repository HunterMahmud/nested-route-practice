import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Header section with all the links</h2>
            <ul className="flex gap-4">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>

            </ul>
        </div>
    );
};

export default Header;