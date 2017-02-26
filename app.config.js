(function(angular){
    'use strict';

    angular.module('CricketApp')
       .config(setProductionSettings);

    setProductionSettings.$inject = ['$compileProvider'];
    function setProductionSettings($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }
    
})(window.angular);
