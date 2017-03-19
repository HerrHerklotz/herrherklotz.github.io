var app = angular.module('herrherklotz', ['ngMaterial', 'ngRoute', 'ngSanitize']);

app.config(['$mdThemingProvider', '$routeProvider', '$locationProvider', 
  function($mdThemingProvider, $routeProvider, $locationProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue');

    $routeProvider
        .when('/blog', 
        {
            templateUrl: 'blog/index.html',
            controller: 'BlogController',
            controllerAs: 'ctrl'
        })
        .otherwise({redirectTo: '/blog'});
  }
]);
