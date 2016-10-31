(function () {
    'use strict';

    /**
     * @ngdoc overview
     * @name pokefrontApp
     * @description
     * # pokefrontApp
     *
     * Main module constants
     */
    angular
        .module('pokefrontApp')
        .constant('REST_CONFIG', {
            'BaseUrl': 'http://127.0.0.1:8080'
        })
        .constant('VALIDATIONS', {
            name: {
                required: true,
                minlength: 4,
                maxlength: 24,
                pattern: '[a-zñA-ZÑ][a-zñA-ZÑ0-9 ]*'
            },
            description: {
                required: true,
                minlength: 30,
                pattern: '[a-zñA-ZÑ][a-zñA-ZÑ0-9 ]*'
            }
        });
}());