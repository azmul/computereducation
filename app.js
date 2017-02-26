(function(angular){
    'use strict';

    function initApp() {
        angular.module('CricketApp');
        angular.bootstrap(document, ['CricketApp']);
    }
    document.addEventListener('DOMContentLoaded', initApp, false);
})(window.angular);
