import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">
                    All Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/places">
                    All Places
                </NavLink>
            </li>
            <li>
                <NavLink to="/places/new">
                    New Place
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth">
                    Connexion
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;