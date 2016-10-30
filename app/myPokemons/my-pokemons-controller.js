(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pokefrontApp.myPokemons controller:myPokemonsCtrl
     * @description
     * # myPokemonsCtrl
     * Controller of pokedex main page
     */

    function myPokemonsCtrl($log, $rootScope, $scope, $filter, myPokemonsService, myPokemons) {
        $log.log('========== Loaded myPokemonsCtrl ==========');

        // Delete one row when 'deletePokemonFromList' event is triggered and captured
        function _deletePokemonFromList(event, filter) {
            var row, pos;
            event.preventDefault();
            row = $filter('filter')($scope.model.pokemons, filter)[0];
            if(row) {
                pos = $scope.model.pokemons.indexOf(row);
                if(pos >= 0) {
                    $scope.model.pokemons.splice(pos, 1);
                }
            }
        }

        $rootScope.$on('deletePokemonFromList', _deletePokemonFromList);

        function _init() {
            if (angular.isDefined(myPokemons) &&
                angular.isDefined(myPokemons.data) &&
                angular.isDefined(myPokemons.error) &&
                myPokemons.error === false) {
                // Copy response data into pokemon list
                $scope.model.pokemons = myPokemons.data;
                // Set favorites number to limit max
                $scope.model.favorites = $filter('filter')(myPokemons.data, {favorites: true}).length;
            }
        }

        $scope.model = {
            pokemons: null,
            favorites: 0
        };

        $scope.filter = {
            byName: '',
            byFavorite: false
        };

        this.addPokemon = myPokemonsService.add;

        _init();
    }

    angular.module('pokefrontApp.myPokemons')
        .controller('myPokemonsCtrl', ['$log', '$rootScope', '$scope', '$filter', 'myPokemonsService', 'myPokemons', myPokemonsCtrl]);
}());