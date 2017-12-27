(function() {

var app = angular.module('commonData');

app.service("gds_Data", gds_Data);

gds_Data.$inject = ["$http","helper"];

function gds_Data($http,helper) {
    var service = {
        getAuthToken: getAuthToken,
        
    };

   
   function getAuthToken(payload){
        //return $http.post('https://apicfa.convirza.com/oauth/token', payload).then(helper.success(), helper.error());
        return $http.post('http://localhost:8008/oauth/authorize?client_id=542511410559-9kjcqqo12aprrc1thk3tkvo920sg6bi5.apps.googleusercontent.com&redirect_uri=https://www.getpostman.com/oauth2/callback', payload).then(helper.success(), helper.error());
    };
    return service;
}
})();