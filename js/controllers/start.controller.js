(function(angular){
    'use strict';
    angular.module('CricketApp')
        .controller('StartController', constructor);

    window.DataBase = {};
    constructor.$inject = ['$scope','$window'];
    function constructor($scope,$window){
        var vm  = this;
        var matchCreate =  [];
        vm.createNewGame = function(){

            if(!localStorage.DataBase){
                var dataBaseCreate = {MatchDetails:'match1',MatchSummary:'ballRunInsert1'};
                var DataSet = [];
                DataSet.push(dataBaseCreate);
                localStorage.DataBase = JSON.stringify(DataSet);
                DataBase.MatchDetails = dataBaseCreate.MatchDetails;
                DataBase.MatchSummary = dataBaseCreate.MatchSummary;
                localStorage.setItem(DataBase.MatchDetails, JSON.stringify(matchCreate));
                localStorage.setItem(DataBase.MatchSummary, JSON.stringify(matchCreate));
                DataBase.dataBaseLength = 1;
            }else{
                var DataSet = JSON.parse(localStorage.DataBase);
                var dataSetLength = DataSet.length;
                var length = dataSetLength+1;
                var dataBaseCreate = {MatchDetails:'match'+length ,MatchSummary:'ballRunInsert'+length};
                DataSet.splice((dataSetLength+1), 1, dataBaseCreate);
                localStorage.DataBase = JSON.stringify(DataSet);
                DataBase.MatchDetails = dataBaseCreate.MatchDetails;
                DataBase.MatchSummary = dataBaseCreate.MatchSummary;
                localStorage.setItem(DataBase.MatchDetails, JSON.stringify(matchCreate));
                localStorage.setItem(DataBase.MatchSummary, JSON.stringify(matchCreate));
            }
        }
    }

})(window.angular);
