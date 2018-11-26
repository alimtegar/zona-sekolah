import React from 'react';
import {NavLink} from "react-router-dom";

const GuestLinks = () => {
    return (
        <div className="collapse navbar-collapse" id="navbar-supported-content">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                        Masuk
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                        Daftar
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default GuestLinks;