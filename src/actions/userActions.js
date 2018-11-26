

export const createTeacher = (newTeacher) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newTeacher.email,
            newTeacher.password
        )
        //     .then((res) => {
        //     return firestore.collection('users').doc(res.user.uid).set({
        //         name: newTeacher.name,
        //         role: 'teacher',
        //         schoolId: newTeacher.schoolId,
        //     });
        // }).then(() => {
        //     dispatch({
        //         type: 'CREATE_TEACHER_SUCCESS',
        //     });
        // }).catch((err) => {
        //     dispatch({
        //         type: 'CREATE_TEACHER_ERROR',
        //         err,
        //     });
        // });
    }
};