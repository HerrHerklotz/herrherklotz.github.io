"use strict";

class AppController {
  
  constructor($document, $rootScope, $scope, $location, $mdSidenav) {
    let self = this;
    this.$document = $document;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$location = $location;
    this.$mdSidenav = $mdSidenav;

    

    this.$scope.desktop = true;
    if ($location.path().endsWith('app'))
    {
      this.$scope.desktop = false;
    }

    this.$rootScope.selectedPage = 'blog';
    this.$scope.linkAPI = {'text-color':'#F00'};
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

app.controller('AppController', ['$document', '$rootScope', '$scope', '$location', '$mdSidenav', AppController]);