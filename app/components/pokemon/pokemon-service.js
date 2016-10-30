(function () {
        'use strict';

        //*************************** SERVICE DEFINITION *****************************
        function pokemonService($log, $resource, $uibModal, REST_CONFIG) {
            function PokemonService() {
                $log.log('========== Loaded pokemonService ==========');
                var _resource;

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

                this.setFavorite = _setFavorite;
                this.unsetFavorite = _unsetFavorite;
                this.modify = _modify;
                this.delete = _delete;
            }

            return new PokemonService();
        }

        //*************************** SERVICE INSTANTIATION **************************
        angular.module('pokefrontApp.myPokemons.pokemon')
            .service('pokemonService', ['$log', '$resource', '$uibModal', 'REST_CONFIG', pokemonService]);
    }

    ()
);