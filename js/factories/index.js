'use strict';
const app = require('angular').module("userNotesWAuthApp");

// Add factories below
app.factory('AuthFactory', require('./AuthFactory'));
app.factory('NoteFactory', require('./NoteFactory'));