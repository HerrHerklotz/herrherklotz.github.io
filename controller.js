function AppController($rootScope, $scope, $location, $mdSidenav) {
  this.setPage = function setPage(oName) {
    $location.url('desktop/' + oName);
    closeSidenav();
  }

  this.toggleSidenav = function toggleSidenav() {
    $mdSidenav('sidenav').toggle();
  }

  this.closeSidenav = function closeSidenav() {
    $mdSidenav('sidenav').close();
  }
  
  $rootScope.selectedPage = 'blog';

  $scope.linkAPI = {'text-color':'#F00'};
}

app.controller('AppController', AppController);