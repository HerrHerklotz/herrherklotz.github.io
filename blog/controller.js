"use strict";

class BlogController {
  constructor($rootScope, $scope, $http) {
    let self = this;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$http = $http;

    this.$rootScope.mTitle = "BLOG"
    this.loadBlog();
  }

  loadBlog() {
    var self = this;
    this.$http.get('blog/content.json', {})
      .then((response)=>{
        self.$scope.blog = response.data;
      }, (response)=>{
        
      }, (response)=>{
        
      });
  }
}

app.controller('BlogController', ['$rootScope', '$scope', '$http', BlogController ]);