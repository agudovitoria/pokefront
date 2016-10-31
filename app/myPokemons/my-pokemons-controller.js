(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pokefrontApp.myPokemons controller:myPokemonsCtrl
     * @description
     * # myPokemonsCtrl
     * Controller of pokedex main page
     */

    function myPokemonsCtrl($log, $rootScope, $scope, $filter, myPokemonsService, myPokemons, Notification, VALIDATIONS) {
        $log.log('========== Loaded myPokemonsCtrl ==========');

        // Delete one row when 'deletePokemonFromList' event is triggered and captured
        function _deletePokemonFromList(event, filter) {
            var row, pos;
            event.preventDefault();
            row = $filter('filter')($scope.model.pokemons, filter)[0];
            if (row) {
                pos = $scope.model.pokemons.indexOf(row);
                if (pos >= 0) {
                    $scope.model.pokemons.splice(pos, 1);
                    Notification.success('Pokemon borrado');
                }
            }
        }

        $rootScope.$on('deletePokemonFromList', _deletePokemonFromList);

        function _resetCreateData() {
            return {
                name: null,
                description: null,
                types: [null, null],
                evolution: null,
                favorite: false
            };
        }

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

        function _toggleCreateForm() {
            $scope.showCreateForm = !$scope.showCreateForm;
        }

        function _saveSuccess(response) {
            if (angular.isDefined(response) &&
                angular.isDefined(response.error) &&
                response.error === false) {
                $scope.model.pokemons.push($scope.pokemonData);
                _toggleCreateForm();
                $scope.pokemonData = _resetCreateData();
            }
        }

        function _saveFail(error) {
            $log.error(error);
        }

        function _save() {
            // Types selection check
            if ($scope.pokemonData.types[0] !== null || $scope.pokemonData.types[1] !== null) {
                $log.log('Create pokemon', $scope.pokemonData);
                myPokemonsService.add($scope.pokemonData)
                    .then(_saveSuccess)
                    .catch(_saveFail);
            }
        }

        $scope.validationRules = VALIDATIONS;

        $scope.model = {
            pokemons: null,
            favorites: 0,
        };

        $scope.pokemonData = _resetCreateData();

        $scope.showCreateForm = false;

        $scope.filter = {
            byName: '',
            byFavorite: false
        };

        this.create = _toggleCreateForm;
        this.cancel = _toggleCreateForm;
        this.save = _save;

        _init();
    }

    angular.module('pokefrontApp.myPokemons')
        .controller('myPokemonsCtrl', ['$log', '$rootScope', '$scope', '$filter', 'myPokemonsService', 'myPokemons', 'Notification', 'VALIDATIONS', myPokemonsCtrl]);
}());