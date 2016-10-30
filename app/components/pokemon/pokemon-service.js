(function () {
        'use strict';

        //*************************** SERVICE DEFINITION *****************************
        function pokemonService($log, $resource, $uibModal, REST_CONFIG) {
            function PokemonService() {
                $log.log('========== Loaded pokemonService ==========');
                var _resource, _modal, _appendToElement;

                _appendToElement = angular.element(document.querySelector('#modalÇontainer'));

                // RestFul communication service
                _resource = $resource(REST_CONFIG.BaseUrl + '/:service/:param');

                function _genericFail(error) {
                    $log.error(error);
                }

                function _setFavorite(name) {
                    return _resource.save({
                        service: 'setFavorite'
                    }, {
                        name: name
                    }).$promise
                        .catch(_genericFail);
                }

                function _unsetFavorite(name) {
                    return _resource.save({
                        service: 'unsetFavorite'
                    }, {
                        name: name
                    }).$promise
                        .catch(_genericFail);
                }

                function _modify(pokemon) {
                    $log.log(pokemon);
                    return _resource.save({
                        service: 'modify'
                    }, pokemon).$promise
                        .catch(_genericFail);
                }

                function _delete(name) {
                    return _resource.delete({
                        service: 'delete',
                        param: name
                    }).$promise
                        .catch(_genericFail);
                }


                function _openModal() {
                    return $uibModal.open({
                        templateUrl: 'components/pokemon/modal/types-tpl.html',
                        controller: 'typesCtrl',
                        controllerAs: 'ctrl',
                        size: 'md',
                        appendTo: _appendToElement,
                        resolve: {
                            type: null
                        }
                    });
                }

                this.setFavorite = _setFavorite;
                this.unsetFavorite = _unsetFavorite;
                this.modify = _modify;
                this.delete = _delete;
                this.openModal = _openModal;
            }

            return new PokemonService();
        }

        //*************************** SERVICE INSTANTIATION **************************
        angular.module('pokefrontApp.myPokemons.pokemon')
            .service('pokemonService', ['$log', '$resource', '$uibModal', 'REST_CONFIG', pokemonService]);
    }

    ()
);