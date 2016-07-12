"use strict";

var app = angular.module('herrherklotz', ['ngMaterial', 'ngRoute', 'ngSanitize']);

app.config(['$mdThemingProvider', '$routeProvider', '$locationProvider', 
  function($mdThemingProvider, $routeProvider, $locationProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('blue');

    $routeProvider
        .when('/api', 
        {
            templateUrl: 'api/index.html',
            controller: 'ApiController',
            controllerAs: 'ctrl'
        })
        .when('/api/app', 
        {
            templateUrl: 'api/index.html',
            controller: 'ApiController',
            controllerAs: 'ctrl'
        })
        .when('/blog', 
        {
            templateUrl: 'blog/index.html',
            controller: 'BlogController',
            controllerAs: 'ctrl'
        })
        .when('/blog/app', 
        {
            templateUrl: 'blog/index.html',
            controller: 'BlogController',
            controllerAs: 'ctrl'
        })
        .when('/start', 
        {
            templateUrl: 'start/index.html',
            controller: 'StartController',
            controllerAs: 'ctrl'
        })
        .when('/start/app', 
        {
            templateUrl: 'start/index.html',
            controller: 'StartController',
            controllerAs: 'ctrl'
        })
        .otherwise({redirectTo: '/blog'});
  }
]);

