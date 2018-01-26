'use strict';

module.exports = function($scope, $window, NoteFactory, AuthFactory){
    let user = AuthFactory.getCurUser();
    if(user){
        NoteFactory.getNotes(user.uid).then(noteData => {
            console.log('Object.values(noteData.data)', Object.values(noteData.data));
            $scope.noteList = Object.values(noteData.data);
        });
    } else {
        $window.location.href = '#!/login';
    }
};