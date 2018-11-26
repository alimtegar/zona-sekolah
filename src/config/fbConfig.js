import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyATN8AxHCi_Tsv3FnA2ZmBqY1AQ1dwETak",
    authDomain: "zona-sekolah.firebaseapp.com",
    databaseURL: "https://zona-sekolah.firebaseio.com",
    projectId: "zona-sekolah",
    storageBucket: "zona-sekolah.appspot.com",
    messagingSenderId: "314329931991"
};
firebase.initializeApp(config);

firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;