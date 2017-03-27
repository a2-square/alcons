'use strict';

app.controller('footerCtrl', ['$scope', '$rootScope', '$location', '$q', '$timeout', 'query', '$route',
    function($scope, $rootScope, $location, $q, $timeout, query, $route) {
        $scope.url = $location.absUrl();
        $scope.visitor = (localStorage.getItem('visitor')) ? localStorage.getItem('visitor') : 'loading..';
        var currentPathIndex = $scope.url.indexOf("localhost");
        if (currentPathIndex == "-1") {
        	console.log("getting visitor.....")
            query.visit().then(function(response) {
                $rootScope.waiting = false;
                if (response.authentication === true) {
                    localStorage.setItem('visitor', response.data.count_alcon.count);
                    $scope.visitor = localStorage.getItem('visitor');
                } else {
                    localStorage.setItem('visitor', 'loading..');
                    $scope.visitor = localStorage.getItem('visitor');
                }

            })
        }

    }
]);
