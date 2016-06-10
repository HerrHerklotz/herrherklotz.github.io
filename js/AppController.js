"use strict";

class AppController {
  constructor($scope, $mdSidenav, $location) {
    this.$scope = $scope;
    this.$mdSidenav = $mdSidenav;
    this.$location = $location;
    
    this.setPage('blog');
  }
  
  toggleSidenav() {
    console.log("toggle")
    this.$mdSidenav('left').toggle();
  }
  
  setPage(oName) {
    switch(oName) {
      case 'about':
        this.$location.url('/about');
        this.$scope.loadedPage = 'herrherklotz - About';
      break;
      case 'abrain/api/rest':
        this.$location.url('/abrain/api/rest');
        this.$scope.loadedPage = 'aBrain - REST API';
      break;
      case 'blog':
        this.$location.url('/blog');
        this.$scope.loadedPage = 'herrherklotz - Blog';
      break;
      case 'projects':
        this.$location.url('/projects');
        this.$scope.loadedPage = 'herrherklotz - Projects';
      break;
    }
    
    if (this.$mdSidenav('left').isOpen())
      this.toggleSidenav();
  }
}