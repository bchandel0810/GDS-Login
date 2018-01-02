(function() {

var app = angular.module('commonData');

app.service("gds_Data", gds_Data);

gds_Data.$inject = ["$http","helper"];

function gds_Data($http,helper) {
    var service = {
        getAuthCode: getAuthCode,
        getAccessToken:getAccessToken
        
    };

   
   function getAuthCode(payload){
        //return $http.post('https://apicfa.convirza.com/oauth/token', payload).then(helper.success(), helper.error());
        return $http.post('https://stag-2-cfaapi-1.convirza.com/oauth/authorize?client_id=542511410559-9kjcqqo12aprrc1thk3tkvo920sg6bi5.apps.googleusercontent.com&redirect_uri=https://script.google.com/macros/d/1ibXgtAe8i70Fa0xU0EqY_oFNFQc99e2Lq4S6TyENL1y88IT7zmAOkl9N/usercallback', payload).then(helper.success(), helper.error());
    };
   function getAccessToken(payload){
    return $http.post('https://stag-2-cfaapi-1.convirza.com/decision', payload).then(helper.success(), helper.error());
   }; 
    return service;
}
})();