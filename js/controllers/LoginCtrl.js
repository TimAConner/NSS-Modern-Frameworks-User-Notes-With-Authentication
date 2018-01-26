'use strict';

module.exports = function($scope, AuthFactory){
    $scope.user = {};

    $scope.loginUser = function(user){
        AuthFactory.logIn(user).then(function(data){
            console.log('Logged In', data);
        }).catch(err => {
            console.log('err', err);
        });
    };
};