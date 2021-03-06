'use strict';

module.exports = function($q, $http){

    const getNotes = (userId) => {
        return $q((resolve, reject) => {
            $http
            .get(`https://practice-project-d42d4.firebaseio.com/UserNotesWithAuth.json?orderBy="uid"&equalTo="${userId}"`)
            .then(notes => resolve(notes))
            .catch(err => {
                console.log(err);
            });
        });
    };

    const saveNote = (note, uid) => {
        return $q((resolve, reject) => {
            $http
            .post("https://practice-project-d42d4.firebaseio.com/UserNotesWithAuth.json", 
                {
                    note,
                    uid
                }
            )
            .then(data => resolve(data));
        });
    };

    return {saveNote, getNotes};
};