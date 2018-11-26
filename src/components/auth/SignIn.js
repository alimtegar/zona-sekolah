import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

/* Actions */
import { signIn } from '../../actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.signIn(this.state);
    };

    render() {
        const {authError, auth} = this.props;

        if (auth.uid) { return (<Redirect to="/" />) }

        return (
            <section className="mx-min-15px" id="signin">
                <div className="jumbotron bg-primary text-center mb-0">
                    <h2 className="font-weight-bold">
                        Masuk ke Akun
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
                                            <label htmlFor="email" className="text-muted small">Email</label>
                                            <input type="text" name="email" className="form-control" id="email"
                                                   placeholder="mail@example.com" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-muted small">Password</label>
                                            <input type="password" name="password" className="form-control" id="password" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group d-flex align-items-center mb-0">
                                            {authError ? <span className="form-text text-danger small">{authError}</span> : ''}
                                            <button className="btn btn-outline-secondary ml-auto">
                                                Masuk Sekarang
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
    };
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);