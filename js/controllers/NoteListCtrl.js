'use strict';

module.exports = function($scope, NoteFactory, AuthFactory){
    let user = AuthFactory.getCurUser();
    if(user){
        NoteFactory.getNotes(user.uid).then(noteData => {
            console.log('Object.values(noteData.data)', Object.values(noteData.data));
            $scope.noteList = Object.values(noteData.data);
        });
    } else {
        console.log('no user');
    }
};