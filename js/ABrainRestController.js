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
    
    this.$http.get('https://api.github.com/repos/HerrHerklotz/aBrain-api-rest/contents/json', {})
      .then((response)=>{
          response.data.tree.forEach((el, id)=>{
            this.$http.get(el.download_url, {})
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