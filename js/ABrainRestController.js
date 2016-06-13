"use strict";

class ABrainRestController {
  constructor($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
    
    this.$scope.data = [];
    
    this.$scope.selected = {
      'uri':undefined,
      'methode':undefined
    };
    
    this.loadApi();
  }
  
  loadApi() {  
    var self = this;
    
    this.$http.get('https://api.github.com/repos/HerrHerklotz/aBrain-api-REST/git/trees/master', {})
      .then((response)=>{
          console.log(response.data.tree);
          response.data.tree.forEach((el, id)=>{
            this.$http.get('https://raw.githubusercontent.com/HerrHerklotz/aBrain-api-REST/master/' + el.path, {})
            .then((response)=>{
                self.$scope.data.push(response.data);
            });
          });
      });
  }
  
  showMethode(oUri, oMethode) {
    var self = this;
    
    self.$scope.selected = {
      'uri': oUri,
      'methode': oMethode
    }
  }
}