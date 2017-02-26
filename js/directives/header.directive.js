/**
 * Created by Azmul on 2/24/2017.
 */
(function(angular){
    'use strict';

    angular.module('CricketApp')
        .directive('headerSection', factory);

    factory.$inject = ['$interval','appInfo'];
    function factory($interval,appInfo) {

        function link(scope, element, attrs) {
            scope.headertitle = "Cricket App";
        }
        function HeaderController(){
            var vm = this;
            vm.appInformation = appInfo;
        }
        return {
            restrict: 'EA',
            templateUrl: 'views/header.view.html',
            controller: HeaderController,
            controllerAs: 'vm',
            link: link
        }
    }
})(window.angular);
