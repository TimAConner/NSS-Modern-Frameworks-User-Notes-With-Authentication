'use strict';

const angular = require('angular');
// Other dependencies below

const app = angular.module('userNotesWAuthApp', []);


require('./AppConstants');
require('./factories');
require('./controllers');


// Put routes here

module.exports = app;