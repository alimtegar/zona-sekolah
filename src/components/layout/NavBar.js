import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleSidebar} from '../../functions';

/* Components */
import GuestLinks from './GuestLinks';
import UserLinks from './UserLinks';

const NavBar = ({auth}) => {
    const sideBarToggler = auth.uid ?
        <button className="navbar-toggler mr-auto" type="button" onClick={toggleSidebar}>
            <i className="fa fa-bars"/>
        </button> : '';
    const navBarToggler = !auth.uid ?
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbar-supported-content" aria-controls="navbar-supported-content"
                aria-expanded="false" aria-label="Toggle Navigation">
            <i className="fa fa-bars"/>
        </button> : '';
    const navBarNav = auth.uid ? <UserLinks/> : <GuestLinks/>;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" id="navbar">
            {sideBarToggler}
            <Link className="navbar-brand mx-0" to="/">
                <i className="fa fa-school mr-2"/>
                Zona Sekolah
                {/*<sup class="badge badge-pill badge-light text-primary x-small ml-2">v3.1</sup>*/}
            </Link>
            {navBarToggler}
            {navBarNav}
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
};

export default withRouter(connect(mapStateToProps)(NavBar));