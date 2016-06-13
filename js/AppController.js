"use strict";

class AppController {
  constructor($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
  }

  loadBlog() {
    var self = this;
    this.$http.get('content/blog.json', {})
      .then((response)=>{
        self.$scope.blog = response.data;
      }, (response)=>{
        
      }, (response)=>{
        
      });
  }
}