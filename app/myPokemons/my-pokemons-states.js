(function () {
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
                    myPokemonsResponse: function (myPokemonsService) {
                        return myPokemonsService.getAll();
                    }
                }
            });

        $urlRouterProvider.otherwise('/myPokedex');
    }

    angular.module('pokefrontApp.myPokemons')
        .config(myPokemonsConfig);
}());
