(function () {
        'use strict';

        //*************************** SERVICE DEFINITION *****************************
        function myPokemonsService($log, $resource, $uibModal, REST_CONFIG) {
            function MyPokemonsService() {
                $log.log('========== Loaded myPokemonsService ==========');
                var _resource,
                    _appendToElement,
                    _modal,
                    _userData;

                // Element to append modal
                _appendToElement = angular.element(document.querySelector('#modalÇontainer'));

                // RestFul communication service
                _resource = $resource(REST_CONFIG.BaseUrl + '/:service');

                function _genericFail(error) {
                    $log.error(error);
                }

                function _getAll() {
                    return _resource.get({
                        service: 'getAll'
                    }).$promise
                        .catch(_genericFail);
                }

                // Should be PUT but $resource doesn't support it natively, we'll use POST instead
                function _add(pokemon) {
                    return _resource.save({
                        service: 'add'
                    }, pokemon).$promise
                        .catch(_genericFail);
                }

                function _openModal() {
                    _modal = $uibModal.open({
                        templateUrl: 'components/pokemon/modal/types-tpl.html',
                        controller: 'typesCtrl',
                        size: 'sm',
                        appendTo: _appendToElement,
                        resolve: {
                            type: null
                        }
                    });
                }

                this.getAll = _getAll;
                this.openModal = _openModal;
                this.add = _add;
            }

            return new MyPokemonsService();
        }

        //*************************** SERVICE INSTANTIATION **************************
        angular.module('pokefrontApp.myPokemons')
            .service('myPokemonsService', ['$log', '$resource', '$uibModal', 'REST_CONFIG', myPokemonsService]);
    }

    ()
);