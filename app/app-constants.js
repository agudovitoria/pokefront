(function() {
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
            fields: {
                users: {
                    name: {
                        required: false,
                        minlength: 1,
                        maxlength: 30,
                        pattern: '[a-zñA-ZÑ][a-zñA-ZÑ\.\,]*[a-zñA-ZÑ]'
                    },
                    firstSurname: {
                        required: false,
                        minlength: 1,
                        maxlength: 30,
                        pattern: '[a-zñA-ZÑ][a-zñA-ZÑ\.\,]*[a-zñA-ZÑ]'
                    },
                    secondSurname: {
                        required: false,
                        minlength: 1,
                        maxlength: 30,
                        pattern: '[a-zñA-ZÑ][a-zñA-ZÑ\.\,]*[a-zñA-ZÑ]'
                    },
                    email: {
                        required: true,
                        minlength: 8,
                        maxlength: 60,
                        pattern: '[a-zA-ZÑ][a-zA-Z0-9\.\-\_]+[a-zA-Z0-9]\@[a-zA-Z][a-zA-Z0-9\.\-\_]+[a-zA-Z0-9]\.[a-zA-Z]{2,3}'
                    },
                    phoneNumber: {
                        required: false,
                        minlength: 9,
                        maxlength: 9,
                        pattern: '[6|9][0-9]{8}'
                    },
                    level: {
                        required: true,
                        minlength: '',
                        maxlength: '',
                        pattern: ''
                    },
                    login: {
                        required: true,
                        minlength: 6,
                        maxlength: 50,
                        pattern: '[a-zñA-ZÑ][a-zñA-ZÑ0-9\-\_\.]*[a-zñA-ZÑ0-9]'
                    },
                    password: {
                        required: true,
                        minlength: 6,
                        maxlength: 15,
                        pattern: '[a-zA-Z][a-zA-Z0-9\-\_]*[a-zA-Z0-9]'
                    },
                }
            }
        });
}());