"use strict";

var app = angular.module('herrherklotz', ['ngMaterial', 'ngRoute', 'ngSanitize']);

app.config(['$mdThemingProvider', '$routeProvider', '$locationProvider', 
  function($mdThemingProvider, $routeProvider, $locationProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('blue');

    $routeProvider
        .when('/', 
        {
            templateUrl: 'blog/page.html',
            controller: 'BlogController',
            controllerAs: 'ctrl'
        })
        .otherwise({redirectTo: '/'});
  }
]);

