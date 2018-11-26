import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'

import fbConfig from './config/fbConfig';

/* Reducers */
import authReducer from './reducers/authReducer';
import reviewReducer from './reducers/reviewReducer';
import userReducer from './reducers/userReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    review: reviewReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});
const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(fbConfig),
));

export default store;



