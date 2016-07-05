"use strict";

class AppController {
  
  constructor($document, $scope, $location) {
    let self = this;
    this.$document = $document;
    this.$scope = $scope;
    this.$location = $location;
    this.$scope.desktop = true;
    if ($location.path().endsWith('app'))
    {
      this.$scope.desktop = false;
    }
  }

  setPage(oName) {
    this.$location.url(oName);
  }

  //toggleSidenav() {
  //  console.log("toggle")
  //  this.$mdSidenav('left').toggle();
  //}

}

app.controller('AppController', ['$document', '$scope', '$location', AppController]);