"use strict";

var app = angular.module('herrherklotz', ['ngMaterial', 'ngRoute', 'ngSanitize']);

app.config(['$mdThemingProvider', '$routeProvider', '$locationProvider', 
  function($mdThemingProvider, $routeProvider, $locationProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('blue');

    $routeProvider
        .when('/blog', 
        {
            templateUrl: 'blog/page.html',
            controller: 'BlogController',
            controllerAs: 'ctrl'
        })
        .when('/blog/app', 
        {
            templateUrl: 'blog/page.html',
            controller: 'BlogController',
            controllerAs: 'ctrl'
        })
        .otherwise({redirectTo: '/blog'});
  }
]);

