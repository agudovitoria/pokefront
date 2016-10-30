(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pokefrontApp.myPokemons.pokemon controller:pokemonCtrl
     * @description
     * # pokemonCtrl
     * Controller of pokemon component
     */

    function pokemonCtrl($log, $scope) {
        $log.log('========== Loaded pokemonCtrl ==========');
        $scope.model = {};
    }

    angular.module('pokefrontApp.myPokemons.pokemon')
        .controller('pokemonCtrl', ['$log', '$scope', pokemonCtrl]);
}());