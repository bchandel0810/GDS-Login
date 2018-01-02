(function() {
    'use strict';

    angular.module('gdsLogin')
        .controller('gdsLoginController', gdsLoginController);


        gdsLoginController.$inject = ['$state','$location', '$scope', 'gds_Data','$http','$cookies','$rootScope'];

    function gdsLoginController($state,$location, $scope, gds_Data,$http,$cookies,$rootScope) {
       
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
          console.log('i am inside gettoken function');
            gds_Data.getAuthCode(payload).then(function(authData) {
                $cookies.put('transactionID', authData.transactionID);
                var userName = authData.user.first_name + " " + authData.user.last_name;
                $cookies.put('username', userName);
                var user = JSON.stringify(authData.user)
                $cookies.putObject('user', user);
                //$rootScope.user = userName;
                $rootScope.transactionID = authData.transactionID;
                $rootScope.client_id = authData.client.clientId;
                console.log('username ' +$scope.username);
                console.log('transactionID ' +$rootScope.transactionID);
                console.log('clientId ' +$rootScope.client_id);
                //console.log("user is " +user);
                if(authData.transactionID){
                    //$location.path( '/decision' );
                    $state.go("decision");
                }
                else{
                    window.alert("Authentication failed");
                }
            });
            
        };
      
       
       
    }
})();