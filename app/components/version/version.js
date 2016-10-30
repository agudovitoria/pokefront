'use strict';

angular.module('pokefrontApp.version', [
  'pokefrontApp.version.interpolate-filter',
  'pokefrontApp.version.version-directive'
])

.value('version', '0.1');
