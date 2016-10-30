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

                function _add(pokemon) {
                    return _resource.put({
                        service: 'add'
                    }, pokemon).$promise
                        .catch(_genericFail);
                }

                function _openModal() {
                    _modal = $uibModal.open({
                        templateUrl: 'src/public/signin/signin-view.html',
                        controller: 'SignInCtrl',
                        size: 'md',
                        appendTo: _appendToElement,
                        resolve: {}
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