import './MainNavigation.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';
import SideBar from '../SideBar/SideBar';
import { Fragment, useState } from 'react';
import Backdrop from '../../../Backdrop/Backdrop';

const MainNavigation = props => {
    const [sideBarIsOpen , setSideBarIsOpen] = useState(false);

    const openSideBar = () => {
        setSideBarIsOpen(true);
    };

    const closeSideBar = () => {
        setSideBarIsOpen(false);
    };
    return (
        <Fragment>
            {sideBarIsOpen && <Backdrop onClick={closeSideBar} />}
        {sideBarIsOpen && 
        <SideBar show={sideBarIsOpen} onClick={closeSideBar}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideBar>
        }
        
        <Header>
            <button className="main-navigation__menu-btn" onClick={openSideBar}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">Places</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </Header>
        </Fragment>
    );
};


export default MainNavigation;