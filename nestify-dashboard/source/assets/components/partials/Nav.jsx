import { useState } from "react";
import { NavLink } from "react-router-dom";
// IMPORTED MODULES
import Logo from "./Logo";
import Logout from "./modals/Logout";
// IMPORTED STYLESHEETS
import "../../css/partials/nav.css";

const Nav = function () {
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleToggleLogoutModal = function () {
        setIsLoggingOut((value) => !value);
    };

    return (
        <>
            {isLoggingOut && <Logout onToggleLogoutModal={handleToggleLogoutModal}></Logout>}
            <div className="div-main-nav-container">
                <div className="div-main-edge-container">
                    <a href="/dashboard">
                        <Logo />
                    </a>
                    <nav className="main-nav-container">
                        <ul className="main-nav-container-list">
                            <li className="main-nav-container-list-item">
                                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="main-nav-container-list-item">
                                <NavLink to="/report" className={({ isActive }) => (isActive ? "active" : "")}>
                                    <span>Report</span>
                                </NavLink>
                            </li>
                            <li className="main-nav-container-list-item">
                                <NavLink to="/map" className={({ isActive }) => (isActive ? "active" : "")}>
                                    <span>Map</span>
                                </NavLink>
                            </li>
                        </ul>
                        <button className={`${isLoggingOut ? "active" : ""}`} onClick={handleToggleLogoutModal}>
                            <ion-icon src="/media/icons/icon-sign-out.svg"></ion-icon>
                            <span>Logout</span>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Nav;
