routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
       name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);

      let resgateState = {
        name: 'resgate',
        url: '/resgate',
        templateUrl: './resgate/resgate.view.html',
        controller: 'ResgateController',
        controllerAs: 'vm'
      }
      $stateProvider.state(resgateState);
      
      $urlRouterProvider.otherwise('/home')  
}