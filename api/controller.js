"use strict";

class ApiController {
  constructor($rootScope, $scope, $routeParams, $http)
  {
    $rootScope.mTitle = "API";
    if($routeParams.mode == 'app')
      $rootScope.desktop = false;
    else
      $rootScope.desktop = true;

    console.log($rootScope.desktop)

    let self = this;    
    self.$scope = $scope;
    self.$http = $http;

    self.$scope.mObjects = ['android', 'led', 'script', 'sensor', 'websocket'];
    self.$scope.mSelected = 'android';

    self.loadApi();
  }
  
  loadApi() 
  {
    var self = this;
    self.$scope.mApiLink = 'api/content/' + self.$scope.mSelected + '.html';
  }
}

app.controller('ApiController', ['$rootScope', '$scope', '$routeParams', '$http', ApiController ]);