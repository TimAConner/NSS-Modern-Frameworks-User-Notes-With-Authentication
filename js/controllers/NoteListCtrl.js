'use strict';

module.exports = function($scope, $window, NoteFactory, AuthFactory){
    let user = AuthFactory.getCurUser();
    if(user){
        NoteFactory.getNotes(user.uid).then(noteData => {
            $scope.noteList = Object.values(noteData.data);
        });
    } else {
        $window.location.href = '#!/login';
    }
};