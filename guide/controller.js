"use strict";

class GuideController 
{
  constructor($rootScope, $scope, $routeParams, $http) 
  {
    $rootScope.mTitle = "GUIDE";
    
    if($routeParams.mode == 'app')
      $rootScope.desktop = false;
    else
      $rootScope.desktop = true;

    let self = this;
    this.$scope = $scope;
    this.$http = $http;
  }
}

app.controller('GuideController', ['$rootScope', '$scope', '$routeParams', '$http', GuideController ]);