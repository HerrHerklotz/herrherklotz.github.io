"use strict";

class BlogController {
  constructor($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
    
    this.$scope.blog = [];
    
    this.loadBlog();
  }
  
  loadBlog() {
    var self = this;
    this.$http.get('content/blog.json', {})
      .then((response)=>{
        self.$scope.blog = response.data;
          console.log(self.$scope.blog);
      }, (response)=>{
        
      }, (response)=>{
        
      });
  }
}