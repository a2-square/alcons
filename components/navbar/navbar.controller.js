'use strict';

app.controller('navbarCtrl', ['$scope', '$rootScope', '$location', '$q', '$timeout', '$http',
    function($scope, $rootScope, $location, $q, $timeout, $http) {
    		//alert($location.absUrl().split('?')[0])
    		$http.get('https://alcon.herokuapp.com/images/count.json').then(function(data){
    			console.log("resssssssssss", data)
    		})
    		
    }
]);
