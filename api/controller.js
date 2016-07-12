"use strict";

class ApiController {
  constructor($rootScope, $scope, $http) {
    let self = this;
    this.$rootScope = $rootScope;
    
    this.$scope = $scope;
    this.$http = $http;

    this.$rootScope.mTitle = "API";
    this.$scope.mObjects = ['android', 'script'];
    this.$scope.mSelected = { 'mName': 'android'};

    this.loadApi();
  }

  loadApi() {
    var self = this;
    self.$http.get('api/' + self.$scope.mSelected.mName + '.json', {})
      .then((response)=>{
        self.$scope.mSelected.mItems = response.data;
        
        self.$scope.android = response.data.android;
      }, (response)=>{
        
      }, (response)=>{
        
      });
  }
}

app.controller('ApiController', ['$rootScope', '$scope', '$http', ApiController ]);