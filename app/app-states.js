(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name pokefrontApp
     * @description
     * # pokefrontApp
     *
     * States definition
     */
    function pokefrontAppConfig($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'src/common/error/404.html'
            });

        $urlRouterProvider.otherwise('/myPokedex');;
    }

    angular.module('pokefrontApp')
        .config(pokefrontAppConfig);
}());
