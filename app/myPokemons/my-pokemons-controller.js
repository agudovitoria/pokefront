(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pokefrontApp.myPokemons controller:myPokemonsCtrl
     * @description
     * # myPokemonsCtrl
     * Controller of pokedex main page
     */

    function myPokemonsCtrl($log, $scope) {
        $log.log('========== Loaded myPokemonsCtrl ==========');
        $scope.model = {};
    }

    angular.module('pokefrontApp.myPokemons')
        .controller('myPokemonsCtrl', myPokemonsCtrl);
}());