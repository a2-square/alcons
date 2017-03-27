'use strict';

app.controller('footerCtrl', ['$scope', '$rootScope', '$location', '$q', '$timeout', 'query',
    function($scope, $rootScope, $location, $q, $timeout, query) {
        $scope.url = $location.path();
        $scope.visitor = 0
        query.visit().then(function(response) {
            $rootScope.waiting = false;
            if (response.authentication === true) {
            	$scope.visitor = response.data.count_alcon.count
            	console.log("visitor", response)
            } else {
            	console.log("visitor errorrrr", response)
            }

        })
    }
]);
