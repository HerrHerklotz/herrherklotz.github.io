"use strict";

class AppController {
  
  constructor($document, $scope, $location) {
    let self = this;
    this.$document = $document;
    this.$scope = $scope;
    this.$location = $location;

    this.setPage('/');
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