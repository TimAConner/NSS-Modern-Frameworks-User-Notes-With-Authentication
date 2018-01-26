"use strict";

const app = require('angular').module("userNotesWAuthApp");

// Add controls below
app.controller('RegisterCtrl', require('./RegisterCtrl'));
app.controller('LoginCtrl', require('./LoginCtrl'));
app.controller('NewNoteCtrl', require('./NewNoteCtrl'));
app.controller('NoteListCtrl', require('./NoteListCtrl'));