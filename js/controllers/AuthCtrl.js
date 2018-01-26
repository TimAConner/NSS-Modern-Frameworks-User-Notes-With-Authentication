'use strict';

module.exports = function($scope, AuthFactory){
    $scope.user = {};

    $scope.registerUser = function(newUser){
        console.log('register');
        AuthFactory.registerWithEmail(newUser).then(function(data){
            console.log('Logged In', data);
        });
    };
};