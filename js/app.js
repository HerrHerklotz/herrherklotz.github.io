"use strict";

var app = angular.module('aBrain', ['ngMaterial', 'ngSanitize']);

app.config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue');
}]);

app.controller('AppController', ['$scope', '$http', ($scope, $http) => new AppController($scope, $http)]);