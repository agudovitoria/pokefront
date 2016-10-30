(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pokefrontApp.myPokemons controller:myPokemonsCtrl
     * @description
     * # myPokemonsCtrl
     * Controller of pokedex main page
     */

    function myPokemonsCtrl($log, $scope, myPokemonsResponse) {
        function myPokemonsFail(error) {
            $log.error('myPokemons response error', error);
        }

        $log.log('========== Loaded myPokemonsCtrl ==========');
        $scope.model = {
            pokemons: []
        };

        if (angular.isDefined(myPokemonsResponse) &&
            angular.isDefined(myPokemonsResponse.data) &&
            angular.isDefined(myPokemonsResponse.error) &&
            myPokemonsResponse.error === false) {
            $scope.model.pokemons = myPokemonsResponse.data;
        }
    }

    angular.module('pokefrontApp.myPokemons')
        .controller('myPokemonsCtrl', ['$log', '$scope', 'myPokemonsResponse', myPokemonsCtrl]);
}());