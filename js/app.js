"use strict";

// Geht noch nicht :-( import {angular} from '../../lib/angular/1.4.7/angular.min.js'
// Geht noch nicht :-( import MyController from 'controller/lsController.js'

var app = angular.module('HerrHerklotz', ['ngMaterial', 'ngRoute']);

app.config(['$mdThemingProvider', '$routeProvider', function($mdThemingProvider, $routeProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue');
    
    $routeProvider
      .when('/about', {
          templateUrl: 'pages/about.html',
          controllerAs: 'ctrl'
      })
      .when('/abrain/api/rest', {
          templateUrl: 'pages/abrain/api/rest.html',
          controller: 'ABrainRestController',
          controllerAs: 'ctrl'
      })
      .when('/abrain/api/script', {
          templateUrl: 'pages/abrain/api/script.html',
          //controller: 'abScriptController',
          //controllerAs: 'ctrl'
      })
      .when('/blog', {
          templateUrl : 'pages/blog.html',
          controller  : 'BlogController',
          controllerAs: 'ctrl'
      })
      .when('/projects', {
          templateUrl: 'pages/projects.html',
          controller: 'ProjectsController',
          controllerAs: 'ctrl'
      })
      .otherwise({redirectTo: '/blog'});
  }]);
  
app.controller('AppController', ['$scope', '$mdSidenav', '$location', ($scope, $mdSidenav, $location) => new AppController($scope, $mdSidenav, $location)]);
app.controller('BlogController', ['$scope','$http', ($scope, $http) => new BlogController($scope, $http)]);
app.controller('ABrainRestController', ['$scope','$http', ($scope, $http) => new ABrainRestController($scope, $http)]);
