'use strict';

app.factory('query', ['$q', '$http', 'api',  function($q, $http, api) {
    var queryFact = this;
    this.queryObj = {};
    this.queryObj.send = function(data) {
        console.log("aya hu factory>>>>>>>>>>>", data, api)
        var deferred = $q.defer();
        $http.post(api + '/sendQuery', data).success(function(response) {
        	deferred.resolve(response)
        })
        return deferred.promise;
    }

    return this.queryObj
}])
