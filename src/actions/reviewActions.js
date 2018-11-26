export const createReview = (review) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const auth = getState().firebase.auth;

        /*
        * senderId
        * senderName
        * senderRole
        * receiverId
        * receiverName
        * receiverRole
        * content
        * createdAt
        * */

        firestore.collection('users').doc(review.receiverId).get().then((doc) => {
            const receiverProfile = doc.data();

            // console.log(receiverProfile);

            firestore.collection('reviews').add({
                ...review,
                senderId: auth.uid,
                senderName: profile.name,
                senderRole: profile.role,
                receiverName: receiverProfile.name,
                receiverRole: receiverProfile.role,
                createdAt: new Date(),
            }).then(() => {
                dispatch({
                    type: 'CREATE_REVIEW_SUCCESS',
                })
            }).catch((err) => {
                dispatch({
                    type: 'CREATE_REVIEW_ERROR',
                    err,
                })
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_REVIEW_ERROR',
                err,
            })
        });
    }
};