'use strict';

module.exports = function($q, $http){

    const getNotes = (userId) => {

    };

    const saveNote = (note, uid) => {
        return $q((resolve, reject) => {
            $http
            .post("https://practice-project-d42d4.firebaseio.com/UserNotesWithAuth.json", 
                {
                    note,
                    uid
                }
            );
        });
    };

    return {saveNote, getNotes};
};