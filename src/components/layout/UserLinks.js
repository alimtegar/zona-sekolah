import React from 'react';
import {connect} from 'react-redux';

/* Actions */
import {signOut} from '../../actions/authActions';

const UserLinks = (props) => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toogle px-0 px-md-3" href="javascript:void(0)" id="navbar-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-ellipsis-v"/>
                </a>
                <div className="dropdown-menu shadow" aria-labelledby="navbar-dropdown">
                    <a href="javascript:void(0)" className="dropdown-item" onClick={props.signOut}>
                    <i className="fa fa-sign-out-alt mr-3"/>
                        Keluar
                    </a>
                </div>
            </li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: () => dispatch(signOut()),
  }
};

export default connect(null, mapDispatchToProps)(UserLinks);