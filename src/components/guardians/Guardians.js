import React, {lazy, Suspense} from 'react';
import connect from "react-redux";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

/* Components */
import ProgressBar from '../ProgressBar';
const GuardianItem = lazy(() => import ('./GuardianItem'));

const Guardians = ({auth, guardians}) => {
    if (!auth.uid) { return (<Redirect to="/signin" />) }

    return (
        <section className="mx-min-15px" id="guardians">
            <div className="jumbotron bg-primary mb-0">
                <h2 className="font-weight-bold">
                    Daftar Wali Siswa
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                {/*<button className="btn btn-secondary btn-circle btn-lg btn-floating shadow">*/}
                    {/*<i className="fa fa-user-plus"/>*/}
                {/*</button>*/}
            </div>
            <div className="guardian-list py-5 px-3 px-md-5">
                <Suspense fallback={<ProgressBar/>}>
                    <div className="guardian-list-container rounded shadow">
                        {guardians.map((guardian, key) => <GuardianItem guardian={guardian} key={key}/>)}
                    </div>
                </Suspense>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    let props = {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        guardians: state.firestore.ordered.users,
    };

    const schoolId = props.profile.schoolId ? props.profile.schoolId : props.auth.uid;

    return {
        ...props,
        schoolId: schoolId,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        {
            collection: 'users',
            where: [['role', '==', 'guardian'], ['schoolId', '==', props.schoolId ? props.schoolId : '']]
        },
    ])
)(Guardians);