'use strict';

module.exports = function($scope, AuthFactory){
    $scope.user = {};

    $scope.registerUser = function(newUser){
        AuthFactory.registerWithEmail(newUser).then(function(data){
            console.log('Registered In', data);
        }).catch(err => {
            console.log('err', err);
        });
    };
};