angular.module('app.cateModule',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.cate',
    url:'/cate',
    css:'app/pages/cate/cate.css',
    templateUrl:'app/pages/cate/cate.html'
  })


})