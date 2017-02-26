(function(angular) {
    angular.module('CricketApp')
           .config(addRoutes);

    addRoutes.$inject = ['$stateProvider', '$locationProvider','$urlRouterProvider'];
    function addRoutes($stateProvider, $locationProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.view.html'
            }).state('about', {
                url: '/about',
                templateUrl: 'views/about.view.html'
            });

        $locationProvider.hashPrefix('');
    }

})(window.angular);