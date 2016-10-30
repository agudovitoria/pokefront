'use strict';

function pokefrontAppConfig($httpProvider, $resourceProvider, NotificationProvider) {
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    // $httpProvider.defaults.headers.post.Accept = 'application/json';
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;

    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });
}

angular.module('pokefrontApp')
    .config(['$httpProvider', '$resourceProvider', 'NotificationProvider', pokefrontAppConfig]);