import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTranslatedRole, getRoleIcon, toggleSidebar} from '../../functions';

const SideBar = ({profile}) => {
    const navLinks = [
        {
            to: '/',
            icon: 'home',
            name: 'Beranda',
            exact: true,
        },
        {
            to: '/reviews',
            icon: 'stream',
            name: 'Review',
            exact: false,
        },
        {
            to: '/teachers',
            icon: 'chalkboard-teacher',
            name: 'Guru',
            exact: false,
        },
        {
            to: '/guardians',
            icon: 'user-friends',
            name: 'Wali Siswa',
            exact: false,
        },
    ];

    return (
        <div id="sidebar" className="mx-min-15px">
            <div className="sidebar-profile d-flex flex-column justify-content-center align-items-center text-white">
                <button className="btn btn-secondary btn-circle btn-lg shadow mb-3">
                    {getRoleIcon(profile.role)}
                </button>
                <h6 className="font-weight-bold mb-0">{profile.name}</h6>
                <small className="text-capitalize">{getTranslatedRole(profile.role)}</small>
            </div>
            <ul className="sidebar-nav nav flex-column">
                {navLinks && navLinks.map((navLink, key) =>
                    <li className="nav-item" key={key} onClick={toggleSidebar}>
                        <NavLink className="nav-link" to={navLink.to} exact={navLink.exact}>
                            <i className={'fa fa-' + navLink.icon + ' mr-3'}/>
                            {navLink.name}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
    }
};

export default withRouter(connect(mapStateToProps)(SideBar));