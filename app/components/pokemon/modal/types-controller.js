(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name pokefrontApp.myPokemons.pokemon controller:typesCtrl
     * @description
     * # typesCtrl
     * Controller of modal component
     */

    function typesCtrl($log, $scope, Notification) {
        $log.log('========== Loaded pokemonCtrl ==========');
        var ctrl = this;

        $scope.model = {
            types: [
                'Bicho',
                'Siniestro',
                'Dragón',
                'Electrico',
                'Hada',
                'Lucha',
                'Fuego',
                'Volador',
                'Fantasma',
                'Planta',
                'Tierra',
                'Hielo',
                'Normal',
                'Veneno',
                'Psíquico',
                'Roca',
                'Acero',
                'Agua'
            ]
        };

        function _selectType(type) {
            $scope.$close(type);
        }

        ctrl.selectType = _selectType;
    }

    angular.module('pokefrontApp.myPokemons.pokemon.modal')
        .controller('typesCtrl', ['$log', '$scope', 'Notification', typesCtrl]);
}());
    
    