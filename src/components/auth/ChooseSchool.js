import React, {Component} from 'react';
import $ from "jquery";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

/* Actions */
import {chooseSchool} from '../../actions/authActions';
import {Redirect} from "react-router-dom";

class ChooseSchool extends Component {
    /* Life Cycle */
    componentDidUpdate() {
        if (this.props.schools) {
            $('.selectpicker').selectpicker();
        }
    }

    state = {
        id: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.chooseSchool(this.state);

        this.props.history.push('/');
    };

    render() {
        const {auth, profile, authError, schools} = this.props;

        console.log(this.props);

        // Route Guard
        if (!profile.isEmpty) {
            if (!auth.uid) {
                return (<Redirect to="/"/>);
            }

            if (profile.role === 'school') {
                return (<Redirect to="/"/>);
            }

            if (profile.role !== 'school' && profile.schoolId) {
                return (<Redirect to="/"/>);
            }
        }

        return (
            <section className="mx-min-15px" id="signin">
                <div className="jumbotron bg-primary text-center mb-0">
                    <h2 className="font-weight-bold">
                        Pilih Sekolah
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="signin-form py-5 px-3 px-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card border-0 rounded shadow">
                                <div className="card-body p-4">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="id" className="text-muted small">Pilih Sekolah</label>
                                            <select name="id" id="id" className="form-control selectpicker"
                                                    data-live-search="true" title="Tidak Ada yang Dipilih"
                                                    onChange={this.handleChange}>
                                                {schools && schools.map((school) =>
                                                    <option value={school.id}
                                                            key={school.id}>{school.name}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="form-group d-flex align-items-center mb-0">
                                            {authError ?
                                                <span className="form-text text-danger small">{authError}</span> : ''}
                                            <button className="btn btn-outline-secondary ml-auto">
                                                Selanjutnya
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        authError: state.auth.authError,
        schools: state.firestore.ordered.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseSchool: (school) => dispatch(chooseSchool(school))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'users',
            where: [['role', '==', 'school']],
        }
    ])
)(ChooseSchool);