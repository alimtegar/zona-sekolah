import React from 'react';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

/* Actions */
import {createReview} from '../../actions/reviewActions';

class CreateReview extends React.Component {
    /* Life Cycle */
    componentDidUpdate() {
        if (this.props.guardians) {
            $('.selectpicker').selectpicker();
        }
    }

    /* State */
    state = {
        receiverId: '',
        content: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createReview(this.state);
        this.props.history.push('/reviews');
    };

    render() {
        const {auth, guardians, reviewError} = this.props;

        if(!auth.uid) { return (<Redirect to="/signin" />); }

        return (
            <section className="mx-min-15px" id="create-review">
                <div className="jumbotron bg-primary mb-0">
                    <h2 className="font-weight-bold">
                        Buat Review
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="create-review-form p-3 p-md-5">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body p-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="receiverId" className="text-muted small">Pilih Penerima</label>
                                    <select name="receiverId" id="receiverId" className="form-control selectpicker"
                                            data-live-search="true" title="Tidak Ada yang Dipilih" onChange={this.handleChange}>
                                        {guardians && guardians.map((guardian) =>
                                            <option value={guardian.id}
                                                    key={guardian.id}>{guardian.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="content" className="text-muted small">Review</label>
                                    <textarea name="content" id="content" cols="30" rows="10"
                                              className="form-control" onChange={this.handleChange} />
                                </div>
                                <div className="form-group d-flex align-items-center mb-0">
                                    {reviewError ? <span className="form-text text-danger small">{reviewError}</span> : ''}
                                    <button className="btn btn-outline-secondary ml-auto">
                                        Kirim Review
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
        guardians: state.firestore.ordered.users,
        reviewError: state.review.reviewError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'users',
            where: [['role', '==', 'guardian']],
        }
    ]),
)(CreateReview);