import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

/* Actions */
import {signUp} from "../../actions/authActions";

class SignUp extends Component {
    state = {
        role: '',
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.signUp(this.state);
    };

    activateOption = (e) => {
        const id = e.target.id;
        const labels = document.querySelectorAll('label');

        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.remove('active');
        }

        document.querySelector('label[for=' + id + ']').classList.add('active');
    };

    render() {
        const {auth, profile, authError} = this.props;

        // Route Guard
        if (auth.uid && (profile.role === 'school' || profile.schoolId)) {
            return (<Redirect to="/"/>)
        }

        if (profile.role !== 'school' && !profile.schoolId) {
            return (<Redirect to="/choose-school"/>)
        }

        return (
            <section className="mx-min-15px" id="signup">
                <div className="jumbotron bg-primary text-center mb-0">
                    <h2 className="font-weight-bold">
                        Daftarkan Akun
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="signup-form mb-4 p-3 p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card border-0 rounded shadow">
                                <div className="card-body p-4">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="d-none">
                                            <input type="radio" name="role" id="school" value="school"
                                                   onChange={(e) => {
                                                       this.handleChange(e);
                                                       this.activateOption(e);
                                                   }}/>
                                            <input type="radio" name="role" id="teacher" value="teacher"
                                                   onChange={(e) => {
                                                       this.handleChange(e);
                                                       this.activateOption(e);
                                                   }}/>
                                            <input type="radio" name="role" id="guardian" value="guardian"
                                                   onChange={(e) => {
                                                       this.handleChange(e);
                                                       this.activateOption(e);
                                                   }}/>
                                        </div>
                                        <label htmlFor="name" className="text-muted small">Daftar Sebagai...</label>
                                        <div className="form-row form-options">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="school"
                                                           className="btn btn-outline-secondary btn-block"
                                                           role="button">
                                                        <i className="fa fa-school mr-2"/>Sekolah
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="teacher"
                                                           className="btn btn-outline-secondary btn-block"
                                                           role="button">
                                                        <i className="fa fa-chalkboard-teacher mr-2"/>Guru
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="guardian"
                                                           className="btn btn-outline-secondary btn-block"
                                                           role="button">
                                                        <i className="fa fa-user-friends mr-2"/>Wali Siswa
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name" className="text-muted small">Nama</label>
                                            <input type="text" name="name" className="form-control" id="name"
                                                   onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="text-muted small">Email</label>
                                            <input type="text" name="email" className="form-control" id="email"
                                                   placeholder="mail@example.com" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-muted small">Password</label>
                                            <input type="password" name="password" className="form-control"
                                                   id="password"
                                                   onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password-confirmation" className="text-muted small">Konfirmasi
                                                Password</label>
                                            <input type="password" name="passwordConfirmation" className="form-control"
                                                   id="password-confirmation" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group d-flex align-items-center mb-0">
                                            {authError ?
                                                <span className="form-text text-danger small">{authError}</span> : ''}
                                            <button className="btn btn-outline-secondary ml-auto">
                                                Daftar Sekarang
                                            </button>
                                        </div>
                                        {/*<button className="btn btn-secondary btn-lg btn-circle btn-floating shadow">*/}
                                        {/*<i className="fa fa-arrow-down" />*/}
                                        {/*</button>*/}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        authError: state.auth.authError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (user) => dispatch(signUp(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);