'use strict';

module.exports = function($scope, $window, AuthFactory){
    $scope.user = {};

    $scope.loginUser = function(){
        AuthFactory.logIn($scope.user).then(function(data){
            $window.location.href = '#!/notes';
        }).catch(err => {
            console.log('err', err);
        });
    };
};