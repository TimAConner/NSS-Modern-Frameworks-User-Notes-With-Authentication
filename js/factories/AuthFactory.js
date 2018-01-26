'use strict';
const firebase = require("firebase");

module.exports = function($q, $http, FIREBASE_CONFIG){

    // Returns true if user is authenticated.
    const isAuthenticated = () => {
        // If currentUser returns data, return true.  Else, return falase.
        return firebase.auth().currenUser ? true : false; 
    };

    // Returns email, user id of currently logged in user.
    const getCurUser = () => {
        return firebase.auth().currentUser();
    };

    // Logs current user out.
    const logOut = () => {
        firebase.auth().signOut();
    };

    // Takes one argument, an object with email and password property.  It will login the user on firebase with the email and password they have given.
    const logIn = (user) => {
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    };

    // Takes an object with an email and password.  Registers a new user with firebase.
    const registerWithEmail = (user) => {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    };

    return {isAuthenticated, getCurUser, logOut, logIn, registerWithEmail};

};