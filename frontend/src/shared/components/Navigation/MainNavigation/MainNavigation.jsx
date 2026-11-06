import './MainNavigation.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';

const MainNavigation = props => {
    return <Header>
                <button className="main-navigation__menu-btn" >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className="main-navigation__title">
                  <Link to="/">Places</Link>
                </h1>
                <nav>
                    <NavLinks />
                </nav>
            </Header>
};


export default MainNavigation;