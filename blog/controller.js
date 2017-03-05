"use strict";

class BlogController {
  constructor($rootScope, $scope, $routeParams, $http) 
  {
    var self = this;

    $rootScope.mTitle = "BLOG";
    
    if($routeParams.mode == 'app')
      $rootScope.desktop = false;
    else
      $rootScope.desktop = true;

    this.$scope = $scope;
    this.$http = $http;

    this.loadBlog();
  }

  loadBlog()
  {
    var self = this;
    this.$http.get('blog/content.json', {})
      .then((response)=>{
        self.$scope.blog = response.data;
      }, (response)=>{
        
      }, (response)=>{
        
      });
  }
}

app.controller('BlogController', ['$rootScope', '$scope', '$routeParams', '$http', BlogController ]);