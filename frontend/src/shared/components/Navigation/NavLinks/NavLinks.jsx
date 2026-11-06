import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    All Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/places">
                    All Places
                </NavLink>
                <NavLink to="/places/new">
                    New Place
                </NavLink>

                <NavLink to="/auth">
                    Connexion
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;