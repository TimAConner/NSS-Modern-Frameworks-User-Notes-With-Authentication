'use strict';

module.exports = function($scope, $window, AuthFactory){
    $scope.user = {};

    $scope.registerUser = function(newUser){
        AuthFactory.registerWithEmail(newUser).then(function(data){
            $window.location.href = '#!/login';
        }).catch(err => {
            console.log('err', err);
        });
    };
};