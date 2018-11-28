import React, {lazy, Suspense} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

/* Components */
import ProgressBar from '../ProgressBar';

const ReviewItem = lazy(() => import('./ReviewItem'));

const Reviews = ({auth, profile, reviews}) => {
    if (!auth.uid) {
        return (<Redirect to="/signin"/>)
    }

    const createReviewBtn = !profile.isEmpty && profile.role !== 'guardian' ?
        <Link to="/reviews/create">
            <button className="btn btn-secondary btn-circle btn-lg btn-floating shadow">
                <i className="fa fa-pen fa"/>
            </button>
        </Link> : '';

    return (
        <section className="mx-min-15px" id="reviews">
            <div className="jumbotron bg-primary mb-0">
                <h2 className="font-weight-bold">
                    Daftar Review
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                {createReviewBtn}
            </div>
            {/*<div className="alert alert-success mb-0 p-4 border-0 rounded-0">*/}
                {/*Dolor sit amet, consectetur adipisicing elit. Vero, voluptates.*/}
            {/*</div>*/}
            <div className="review-list py-5 px-3 px-md-5">
                <Suspense fallback={<ProgressBar/>}>
                    {reviews && reviews.sort((a, b) => {
                        /* Sorting to get the latest review */

                        if (a.createdAt.seconds > b.createdAt.seconds) {
                            return -1;
                        } else if (a.createdAt.seconds < b.createdAt.seconds) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }).map(review => (
                        <ReviewItem review={review} key={review.id}/>
                    ))}
                </Suspense>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    console.log(state);

    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        reviews: state.firestore.ordered.reviews,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        if (!props.profile.isEmpty && props.profile.role === 'guardian') {
            return [
                {
                    collection: 'reviews',
                    where: [['receiverId', '==', props.auth.uid ? props.auth.uid : '']],
                    // orderBy: ['createdAt', 'desc'],
                },
            ];
        } else {
            return [
                {
                    collection: 'reviews',
                    where: [['senderId', '==', props.auth.uid ? props.auth.uid : '']],
                    // orderBy: ['createdAt', 'desc'],
                },
            ];
        }
    }),
)(Reviews);