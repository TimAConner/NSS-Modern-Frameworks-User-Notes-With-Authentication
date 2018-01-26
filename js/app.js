'use strict';

const angular = require('angular');
// Other dependencies below
const ngRoute = require("angular-route");

const app = angular.module('userNotesWAuthApp', [ngRoute]);


require('./AppConstants');
require('./factories');
require('./controllers');


// Put routes here
app.config(function($routeProvider){
    $routeProvider
    .when("/register", {
        templateUrl: '../partials/register.html',
        controller: "RegisterCtrl"
    })
    .when("/login", {
        templateUrl: '../partials/login.html',
        controller: "LoginCtrl"
    })
    .when("/new", {
        templateUrl: '../partials/newNote.html',
        controller: "NewNoteCtrl"
    })
    .otherwise("/");
});

module.exports = app;