'use strict';

module.exports = function($scope, $window, AuthFactory, NoteFactory){
    $scope.note = "This is a note.";
    $scope.saveNote = () => {
        let user = AuthFactory.getCurUser();

        // If user returns any data, then the user is logged in.
        if(user){
            NoteFactory.saveNote($scope.note, user.uid).then(() => {
                $window.location.href = "#!/notes";
            });
            
        } else {
            console.log('Not Logged In.  Reroute to login.');
        }
    };
};  