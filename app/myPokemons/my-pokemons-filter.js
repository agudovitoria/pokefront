(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pokefrontApp.myPokemons filter:favoritesFilter
     * @description
     * # favoritesFilter
     * Filter for getting the favorite pokemons
     */

    function favoritesFilter($filter) {
        return function (input, param) {
            var result = input;
            if (param === true) {
                result = $filter('filter')(input, {favorite: true});
            }
            return result;
        };
    }

    angular.module('pokefrontApp.myPokemons')
        .filter('favorites', ['$filter', favoritesFilter]);
}());