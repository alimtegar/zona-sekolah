import React, {lazy, Suspense} from 'react';
import {Redirect} from "react-router-dom";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

/* Components */
import ProgressBar from '../ProgressBar';

const TeacherItem = lazy(() => import ('./TeacherItem'));

const Teachers = ({auth, teachers, profile, schoolId}) => {
    if (!auth.uid) {
        return (<Redirect to="/signin"/>)
    }

    console.log(schoolId);

    return (
        <section className="mx-min-15px" id="teachers">
            <div className="jumbotron bg-primary mb-0">
                <h2 className="font-weight-bold">
                    Daftar Guru
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="teacher-list py-5 px-3 px-md-5">
                <Suspense fallback={<ProgressBar/>}>
                    <div className="teacher-list-container rounded shadow">
                        {teachers && teachers.map((teacher, key) => <TeacherItem teacher={teacher} key={key}/>)}
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
        teachers: state.firestore.ordered.users,
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
            where: [['role', '==', 'teacher'], ['schoolId', '==', props.schoolId ? props.schoolId : '']]
        },
    ])
)(Teachers);