"use strict";

class ApiController {
  constructor($scope, $http) {
    let self = this;
    this.$scope = $scope;
    this.$http = $http;

    this.loadApi();
  }

  loadApi() {
    var self = this;
    this.$http.get('api/content.json', {})
      .then((response)=>{
        self.$scope.script = response.data.script;
        
        self.$scope.android = response.data.android;
      }, (response)=>{
        
      }, (response)=>{
        
      });
  }
}

app.controller('ApiController', ['$scope', '$http', ApiController ]);