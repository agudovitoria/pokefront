'use strict';

angular.module('pokefrontApp')
.config(['$httpProvider', '$resourceProvider', function($httpProvider, $resourceProvider) {
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    // $httpProvider.defaults.headers.post.Accept = 'application/json';
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);