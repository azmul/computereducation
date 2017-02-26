(function(angular){
    'use strict';
    angular.module('CricketApp')
        .controller('HomeController', constructor);

    constructor.$inject = ['$scope','$log','$q','$location','SelectedBattingBallingService'];
    function constructor($scope,$log,$q,$location,SelectedBattingBallingService){
        var vm  = this;
        vm.message = 'hello';

        vm.simulateQuery = false;
        vm.isDisabled    = false;

        vm.repos         = loadAll();
        vm.querySearch   = querySearch;
        vm.selectedItemChangeBatting = selectedItemChangeBatting;
        vm.selectedItemChangeBalling = selectedItemChangeBalling;

        function querySearch (query) {
            var results = query ? vm.repos.filter( createFilterFor(query) ) : vm.repos,
                deferred;
            if (vm.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function selectedItemChangeBatting(item) {
            SelectedBattingBallingService.setBatting(item);
            //$log.info('Item changed to ' + JSON.stringify(item));
        }

        function selectedItemChangeBalling(item) {
            SelectedBattingBallingService.setBalling(item);
            //$log.info('Item changed to ' + JSON.stringify(item));
        }

        function loadAll() {
            var repos = [
                {
                    'name'      : 'Bangladesh',
                    'img'  : 'image/bangladesh.png'
                },
                {
                    'name'      : 'India',
                    'img'  : 'image/india.png'
                },
                {
                    'name'      : 'Pakistan',
                    'img'  : 'image/pakistan.png'
                },
                {
                    'name'      : 'Srilanka',
                    'img'  : 'image/srilanka.png'
                },
                {
                    'name'      : 'Australia',
                    'img'  : 'image/australia.png'
                },
                {
                    'name'      : 'England',
                    'img'  : 'image/england.png'
                },
                {
                    'name'      : 'New Zealand',
                    'img'  : 'image/newzeland.png'
                }
            ];
            return repos.map( function (repo) {
                repo.value = repo.name.toLowerCase();
                return repo;
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) === 0);
            };

        }

        vm.play = function(){
            $location.path('/play');
        };

    }


})(window.angular);


