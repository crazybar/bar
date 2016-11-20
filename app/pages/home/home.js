'use strict'
angular.module('app.homeModule',[
])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.home',
    url:'/home',
    css:'app/pages/home/home.css ',
    templateUrl:'app/pages/home/home.html',
    controller:function($scope){
      
    }
  })
  
  //如果有需要可以配置二级路由  
//.state({
//  name: 'index.home.part1',
//  url: '/part1',
//  css:'app/pages/home/home.part1/style.css',
//  views: {
//   'viewb': {
//     templateUrl: 'app/pages/home/home.part1/home.part1.html',
//     controller: ['$scope',
//       function ($scope) {
//          $scope.name = 'davie'
//       }]
//   }
// }
//})

})
