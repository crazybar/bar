angular.module('app.cartModule',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.cart',
    url:'/cart',
    css:'app/pages/cart/cart.css',
    templateUrl:'app/pages/cart/cart.html'
  })


})
