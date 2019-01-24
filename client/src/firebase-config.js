import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "<enter your firebase app api key>",
    authDomain: "<enter your firebase auth domain>",
    databaseURL: "<enter your firebase database url>",
    projectId: "<enter your firebase project id>",
    storageBucket: "<enter your firebase storage bucket>",
    messagingSenderId: "<enter your firebase messaging sender id>"
};

firebase.initializeApp(config);

var storage = firebase.storage();

export {
    storage, firebase as default
};