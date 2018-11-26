export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        ).then(() => {
            dispatch({
                type: 'SIGNIN_SUCCESS',
            });
        }).catch((err) => {
            dispatch({
                type: 'SIGNIN_ERROR',
                err,
            });
        });
    }
};

export const signUp = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                name: user.name,
                role: user.role,
            });
        }).then(() => {
            dispatch({
                type: 'SIGNUP_SUCCESS',
            });
        }).catch((err) => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err,
            });
        });
    }
};

export const chooseSchool = (school) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const auth = getState().firebase.auth;

        firestore.collection('users').doc(auth.uid).update({
            schoolId: school.id,
        }).then(() => {
            dispatch({
                type: 'CHOOSE_SCHOOL_SUCCESS',
            });
        }).catch((err) => {
            dispatch({
                type: 'CHOOSE_SCHOOL_ERROR',
                err,
            });
        });
    }
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'SIGNOUT_SUCCESS',
            });
        });
    }
};