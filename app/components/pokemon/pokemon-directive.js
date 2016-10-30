'use strict';
angular.module('pokefrontApp.myPokemons.pokemon')
    .directive('pokemon', function () {
        return {
            restrict: 'E',
            replace: true,
            scope : {
                pokemonData : '='
            },
            templateUrl: 'components/pokemon/pokemon-tpl.html',
            controller: 'pokemonCtrl',
            controllerAs: 'ctrl'
        };
    });