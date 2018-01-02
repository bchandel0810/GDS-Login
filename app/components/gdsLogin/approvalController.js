(function() {
    'use strict';

    angular.module('gdsLogin')
        .controller('approvalController', approvalController);


        approvalController.$inject = ['$state','$location', '$scope', 'gds_Data','$http','$cookies','$rootScope'];

    function approvalController($state, $location,$scope, gds_Data,$http,$cookies,$rootScope) {
       
     
      $scope.transactionID = $rootScope.transactionID;
     
      $scope.allow = function(){
        $scope.user = $cookies.getObject('user');
        console.log('user +++ ' + $scope.user);
        var payload = {
            "transaction_id":$rootScope.transactionID,
            "client_id": $rootScope.client_id,
            "user": $scope.user
           
          };
          
          gds_Data.getAccessToken(payload).then(function(authData) {
            //$cookies.put('authToken', authData.access_token);
          
            console.log('approval' +authData);
            console.log('transactionID ' +$rootScope.transactionID);
            console.log('clientId ' +$rootScope.client_id);
        });
      }
      $scope.deny = function(){
        $state.go("gds-login");
      }
       
       
    }
})();