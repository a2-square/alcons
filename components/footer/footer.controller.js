'use strict';

app.controller('footerCtrl', ['$scope', '$rootScope', '$location', '$q', '$timeout', function($scope, $rootScope, $location, $q, $timeout) {
    $scope.url = $location.path();
}]);
