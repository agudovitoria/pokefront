'use strict';

angular.module('pokefrontApp')
.config(['$httpProvider', '$resourceProvider', function($httpProvider, $resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);