"use strict";

class AppController {
  
  constructor($document, $scope, $location, $mdSidenav) {
    let self = this;
    this.$document = $document;
    this.$scope = $scope;
    this.$location = $location;
    this.$mdSidenav = $mdSidenav;

    this.$scope.desktop = true;
    if ($location.path().endsWith('app'))
    {
      this.$scope.desktop = false;
    }
  }

  setPage(oName) {
    this.$location.url(oName);
    this.closeSidenav();
  }

  toggleSidenav() {
    this.$mdSidenav('sidenav').toggle();
  }

  closeSidenav() {
    this.$mdSidenav('sidenav').close();
  }

}

app.controller('AppController', ['$document', '$scope', '$location', '$mdSidenav', AppController]);