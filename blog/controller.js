function BlogController($rootScope, $scope, $routeParams, $http) {
  $rootScope.mTitle = "BLOG";
  
  $http.get('blog/content.json', {})
      .then((response)=>{
        $scope.blog = response.data;
      });
}

app.controller('BlogController', BlogController);