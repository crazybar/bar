angular.module('app.distModule',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.dist',
    url:'/dist',
    css:'app/pages/dist/dist.css',
    templateUrl:'app/pages/dist/dist.html'
  })


})
