import * as firebase from 'firebase'

var firebaseConfig = {
	apiKey: "AIzaSyCj3wtHYG4um_Sw78wQo1nHvtkTY7obcwA",
	authDomain: "app-sos-f9079.firebaseapp.com",
	databaseURL: "https://app-sos-f9079.firebaseio.com",
	projectId: "app-sos-f9079",
	storageBucket: "app-sos-f9079.appspot.com",
	messagingSenderId: "230785161396",
	appId: "1:230785161396:web:8f606d8c862300a75d5fe1",
	measurementId: "G-HHNBPNP678"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);