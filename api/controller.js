"use strict";

class ApiController {
  constructor($scope, $http) {
    let self = this;
    this.$scope = $scope;
    this.$http = $http;
  }

  loadApi() {
    var self = this;
    this.$http.get('/api/content.json', {})
      .then((response)=>{
        self.$scope.blog = response.data;
      }, (response)=>{
        
      }, (response)=>{
        
      });
  }
}

app.controller('BlogController', ['$scope', '$http', ApiController ]);