(function() {
    'use strict';
    angular.module("commonData")
        .factory("helper", helper);

    helper.$inject = [];

    function helper() {

        var service = {
            success: success,
            error: error
        };

        return service;

        function success(func) {
            return function(res) {
                var data = res.data;
                if (_.isFunction(func)) {
                    var result = func(data);
                    data = result || data;
                }
                return data;
            };
        }

        function error(func) {
            return function(err) {
               
                console.trace(err);
                _.isFunction(func) && func(err);
                return err;
            };
        }
    }
})();