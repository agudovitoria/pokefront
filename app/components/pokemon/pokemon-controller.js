(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pokefrontApp.myPokemons.pokemon controller:pokemonCtrl
     * @description
     * # pokemonCtrl
     * Controller of pokemon component
     */

    function pokemonCtrl($log, $rootScope, $scope, pokemonService, Notification, VALIDATIONS) {
        var _deletingRowName = null;
        $log.log('========== Loaded pokemonCtrl ==========');

        function _toggleEditing() {
            $scope.editing = !$scope.editing;
            if(!$scope.isEditing) {
                _inputToModel();
            }
        }

        // Back auxiliar model data to input data (synchronize model)
        function _modelToInput() {
            $scope.pokemonData.name = $scope.model.name;
            $scope.pokemonData.description = $scope.model.description;
            $scope.pokemonData.type = $scope.model.type;
            $scope.pokemonData.evolution = $scope.model.evolution;
            $scope.pokemonData.favorite = $scope.model.favorite;
        }

        // Copy input data into auxiliar model (input mapper)
        function _inputToModel() {
            $scope.model.name = $scope.pokemonData.name;
            $scope.model.description = $scope.pokemonData.description;
            $scope.model.type = $scope.pokemonData.type;
            $scope.model.evolution = $scope.pokemonData.evolution;
            $scope.model.favorite = $scope.pokemonData.favorite;
        }

        function _responseFail(error) {
            $log.error(response.message);
        }

        function _responseModifySuccess(response) {
            if (angular.isDefined(response.error) && response.error === false) {
                Notification.success('Pokemon modificado');
                _modelToInput();
                _toggleEditing();
            } else {
                Notification.error(response.message);
            }
        }

        function _responseFavoriteSuccess(response) {
            if (angular.isDefined(response.error) && response.error === false) {
                $scope.pokemonData.favorite = !$scope.pokemonData.favorite;
                Notification.success('Pokemon modificado');
            } else {
                Notification.error(response.message);
            }
        }

        function _toggleFavorite(pokemon) {
            if(pokemon.favorite) {
                pokemonService.unsetFavorite(pokemon.name)
                    .then(_responseFavoriteSuccess)
                    .catch(_responseFail);
            } else {
                pokemonService.setFavorite(pokemon.name)
                    .then(_responseFavoriteSuccess)
                    .catch(_responseFail);
            }
        }

        function _responseModifySuccess(response) {
            if (angular.isDefined(response.error) && response.error === false) {
                Notification.success('Pokemon modificado');
                _modelToInput();
                _toggleEditing();
            } else {
                Notification.error(response.message);
            }
        }

        function _modify(pokemon) {
            pokemonService.modify(pokemon)
                .then(_responseModifySuccess)
                .catch(_responseFail);
        }

        function _responseDeleteSuccess(response) {
            if (angular.isDefined(response.error) && response.error === false) {
                // Emit 'deletePokemonFromList' event to delete pokemon from list
                $rootScope.$broadcast('deletePokemonFromList', {name: _deletingRowName});
            } else {
                Notification.error(response.message);
            }
        }

        function _delete(name) {
            _deletingRowName = name;
            pokemonService.delete(name)
                .then(_responseDeleteSuccess)
                .catch(_responseFail);
        }

        function _selectType(pos) {
            pokemonService.openModal().result.then(function (type) {
                console.log('Seleccionado tipo: ' + type);
                $scope.pokemonData.types[pos] = type;
            }, function () {
                $log.info('modal cerrado');
            });
        }

        function _deleteType(pos) {
            $scope.pokemonData.types[pos] = null;
        }

        $scope.editing = false;
        $scope.validationRules = VALIDATIONS;
        $scope.model = {};

        _inputToModel(); // First copy from input pokemon data to auxiliar model

        this.modify = _modify;
        this.delete = _delete;
        this.toggleFavorite = _toggleFavorite;
        this.open = _toggleEditing;
        this.cancel = _toggleEditing;
        this.selectType = _selectType;
        this.deleteType = _deleteType;
    }

    angular.module('pokefrontApp.myPokemons.pokemon')
        .controller('pokemonCtrl', ['$log', '$rootScope', '$scope', 'pokemonService', 'Notification', 'VALIDATIONS', pokemonCtrl]);
}());