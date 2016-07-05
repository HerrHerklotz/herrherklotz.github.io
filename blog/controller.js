"use strict";

class BlogController {
  constructor($scope, $http) {
    let self = this;
    this.$scope = $scope;
    this.$http = $http;

    this.loadBlog();
  }

  loadBlog() {
    var self = this;
    this.$http.get('/blog/content.json', {})
      .then((response)=>{
        self.$scope.blog = response.data;
      }, (response)=>{
        
      }, (response)=>{
        
      });
  }
}

app.controller('BlogController', ['$scope', '$http', BlogController ]);