'use strict';

module.exports = function($scope, $window, AuthFactory){
    $scope.user = {
        email: "",
        password: ""
    };

    $scope.registerUser = function(){
        AuthFactory.registerWithEmail($scope.user).then(function(data){
            $window.location.href = '#!/login';
        }).catch(err => {
            console.log('err', err);
        });
    };
};