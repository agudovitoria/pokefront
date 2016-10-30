(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name pokefrontApp.myPokemons
     * @description
     * # pokefrontApp.myPokemons
     *
     * States definition
     */
    function myPokemonsConfig($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('myPokedex', {
                url: '/myPokedex',
                templateUrl: 'myPokemons/my-pokemons-tpl.html',
                controller: 'myPokemonsCtrl',
                resolve: {
                    // myPokemons: function(loginService, userService, $state, NAVIGATION_CONFIG) {
                    //     var goToDashboard = function(response) {
                    //         if (response.status === true) {
                    //             $state.go(NAVIGATION_CONFIG.DashboardState.name);
                    //         }
                    //     };
                    //
                    //     return loginService.isLogged()
                    //         .then(goToDashboard);
                    // }
                }
            });

        $urlRouterProvider.otherwise('/myPokedex');
    }

    angular.module('pokefrontApp.myPokemons')
        .config(myPokemonsConfig);
}());
