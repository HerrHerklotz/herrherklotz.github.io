"use strict";

class StartController {
  constructor($scope, $http) {
    let self = this;
    this.$scope = $scope;
    this.$http = $http;
  }
}

app.controller('StartController', StartController);