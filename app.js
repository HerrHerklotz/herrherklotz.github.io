"use strict";

var app = angular.module('herrherklotz', ['ngMaterial', 'ngRoute', 'ngSanitize']);

app.config(['$mdThemingProvider', '$routeProvider', '$locationProvider', 
  function($mdThemingProvider, $routeProvider, $locationProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('blue');

    $routeProvider
        .when('/:mode/api', 
        {
            templateUrl: 'api/index.html',
            controller: 'ApiController',
            controllerAs: 'ctrl'
        })
        .when('/:mode/blog', 
        {
            templateUrl: 'blog/index.html',
            controller: 'BlogController',
            controllerAs: 'ctrl'
        })
        .when('/:mode/guide', 
        {
            templateUrl: 'guide/index.html',
            controller: 'GuideController',
            controllerAs: 'ctrl'
        })
        .otherwise({redirectTo: '/desktop/blog'});
  }
]);

