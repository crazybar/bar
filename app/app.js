angular.module('App',[
  'ui.router',
  'angularCSS',
  'app.homeModule',
  'app.distModule',
  'app.cartModule',
  'app.mineModule',
  'app.cateModule'
])

.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/index');

    $stateProvider

    .state({
      name:'index',
      url:'/index',
      css:'app/commen/style.css',
      templateUrl:'app/pages/footer/footer.html',
      controller:function(){

//        angular.element('#container').addClass('footer')
      }
    })

    .state({
      name:'search',
      url:'/search',
      templateUrl:'app/pages/search/search.html',
      controller:function(){
        console.log('search..')
        angular.element('#container').addClass('animated slideInLeft')
      }
    })
})
