import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTranslatedRole, getRoleIcon} from '../../functions';

const SideBar = ({profile}) => {
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
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>
                        <i className="fa fa-home mr-3"/>
                        Beranda
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/reviews">
                        <i className="fa fa-stream mr-3"/>
                        Review
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/teachers">
                        <i className="fa fa-chalkboard-teacher mr-3"/>
                        Guru
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/guardians">
                        <i className="fa fa-user-friends mr-3"/>
                        Wali Siswa
                    </NavLink>
                </li>
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