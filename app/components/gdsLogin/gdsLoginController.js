(function() {
    'use strict';

    angular.module('gdsLogin')
        .controller('gdsLoginController', gdsLoginController);


        gdsLoginController.$inject = ['$state', '$scope', 'gds_Data','$http','$cookies'];

    function gdsLoginController($state, $scope, gds_Data,$http,$cookies) {
       
       $scope.username;
       $scope.password;
       $scope.token ;

       $scope.getToken = function(){
        var payload = {
            "response_type":"code",
            "approval_prompt": "auto",
            "client_secret": "bz5g4nQg4zUgJo3LJ1cOAFVA",
            "username": $scope.username,
            "password":$scope.password
          };
          gds_Data.getAuthToken(payload).then(function(authData) {
            //$cookies.put('authToken', authData.access_token);
            $scope.transactionID = authData.transactionID;
            console.log('username ' +$scope.username);
            console.log('token ' +$scope.transactionID);
        });
        
       };
      
       
       
    }
})();