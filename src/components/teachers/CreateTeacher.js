import React, {Component} from 'react';
import {connect} from 'react-redux';

/* Actions */
import {createTeacher} from '../../actions/userActions';

class CreateReview extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        schoolId: this.props.auth.uid,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createTeacher(this.state);
    };

    render() {
        const {userError} = this.props;

        return (
            <section className="mx-min-15px" id="create-review">
                <div className="jumbotron bg-primary mb-0">
                    <h2 className="font-weight-bold">
                        Buat Akun Guru
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="create-review-form p-3 p-md-5">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body p-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="text-muted small">Nama Lengkap</label>
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
                                    <input type="password" name="password" className="form-control" id="password"
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password-confirmation" className="text-muted small">Konfirmasi
                                        Password</label>
                                    <input type="password" name="passwordConfirmation" className="form-control"
                                           id="password-confirmation" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group d-flex align-items-center mb-0">
                                    {userError ? <span className="form-text text-danger small">{userError}</span> : ''}
                                    <button className="btn btn-outline-secondary ml-auto">
                                        Buat Akun
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        userError: state.user.userError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTeacher: (newTeacher) => dispatch(createTeacher(newTeacher)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);