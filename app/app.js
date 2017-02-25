'use strict';
var app = angular.module('ajitkumar', [
        'ngRoute',
        'ngStorage',
        'angular-toasty',
    ])
    .config(function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/app/home/home.html',
            controller: 'homeCtrl'
        }).
        when('/about-us', {
            templateUrl: '/app/about-us/about.html',
            controller: 'aboutCtrl'
        }).
        when('/AMC', {
            templateUrl: '/app/AMC/amc.html',
            controller: 'amcCtrl'
        }).
        when('/brands', {
            templateUrl: '/app/brand/brand.html',
            controller: 'brandCtrl'
        }).
        when('/contact-us', {
            templateUrl: '/app/contact-us/contact.html',
            controller: 'contactCtrl'
        }).
        when('/:url', {
            templateUrl: '/app/brand/brand.html',
            controller: 'brandCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(false);
        //$httpProvider.interceptors.push('authInterceptor');
    })

.constant('api', 'https://alcon.herokuapp.com/api')

.factory('authInterceptor', function($rootScope, $q, $location) {
    return {
        // Add authorization token to headers
        request: function(config) {
            console.log("i am requesting to server")
        },

        // Intercept 401s and redirect you to login
        responseError: function(response) {
            console.log("Error from server")
        }
    };
})

.run(['$rootScope', '$location',
        function($rootScope, $location) {
            $rootScope.$on('$routeChangeStart', function(e, curr, prev) {
                (curr.$$route.controller=="homeCtrl")? $rootScope.home = true : $rootScope.home = false;
                console.log($rootScope.home)
                $rootScope.waiting = true;
            });
            $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
                setTimeout(function() {
                    $rootScope.waiting = false;
                    $rootScope.$digest();
                }, 1000);
            });
            $rootScope.$on('$routeChangeError',
                function(event, current, previous, rejection, $localStorage) {
                    setTimeout(function() {
                        $rootScope.waiting = false;
                        $rootScope.$digest();
                    }, 1000);
                });
        }
    ])
    .directive("validSubmit", ["$parse", function($parse) {
        return {
            require: 'form',
            link: function(scope, element, iAttrs, form) {
                form.$submitted = false;
                var fn = $parse(iAttrs.validSubmit);
                element.on("submit", function(event) {
                    scope.$apply(function() {
                        form.$submitted = true;
                        if (form.$valid) {
                            fn(scope, {
                                $event: event
                            });
                            form.$submitted = false;
                        }
                    });
                });
            }
        };
    }]);
