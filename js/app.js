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
    .when("/", {
        templateUrl: '../partials/register.html',
        controller: "AuthCtrl"
    })
    .otherwise("/");
});

module.exports = app;