import firebase from 'firebase';
var firebaseConfig = {
	apiKey: 'AIzaSyChW41evKh0y5RB4227eIgWZNJxfrJDYqY',
	authDomain: 'clone-fecac.firebaseapp.com',
	databaseURL: 'https://clone-fecac.firebaseio.com',
	projectId: 'clone-fecac',
	storageBucket: 'clone-fecac.appspot.com',
	messagingSenderId: '954262740574',
	appId: '1:954262740574:web:958b7bfe567998b8c11ecf',
	measurementId: 'G-1L2XHL543F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.EmailAuthProvider();

export { auth, provider };
export default db;
