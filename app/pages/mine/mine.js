angular.module('app.mineModule',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.mine',
    url:'/mine',
    css:'app/pages/mine/mine.css',
    templateUrl:'app/pages/mine/mine.html'
  })

})
