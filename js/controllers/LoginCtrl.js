'use strict';

module.exports = function($scope, $window, AuthFactory){
    $scope.user = {};

    $scope.loginUser = function(user){
        AuthFactory.logIn(user).then(function(data){
            console.log('Logged In', data);
            $window.location.href = '#!/notes';
        }).catch(err => {
            console.log('err', err);
        });
    };
};