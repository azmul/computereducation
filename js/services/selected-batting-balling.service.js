(function(angular){
    'use strict';
    angular.module('CricketApp')
        .factory('SelectedBattingBallingService', constructor);

    constructor.$inject = [];
    function constructor(){

        var factory = {};
        var matchCreate = [];
        var dataBaseLength = JSON.parse(localStorage.DataBase);
        var matchNumber = 'match'+ (dataBaseLength.length).toString();
        //var a =localStorage.setItem(matchNumber, JSON.stringify(matchCreate));
        //console.log(a);
        var a = localStorage.getItem(matchNumber);
        console.log(a);

        factory.setBatting = function(batting) {

            if(a){
                var batting = {bating:batting};
                //var match = JSON.parse(matchNumber);
                a.splice(0, 1, batting);
                //matchNumber = JSON.stringify(a);
                localStorage.setItem(matchNumber, JSON.stringify(a));
            }else{
                var match = [];
                var matchDetails = [];
                var batting = {bating:batting};
                match.push(batting);
                matchNumber = JSON.stringify(match);
                localStorage.ballRunInsert1 = JSON.stringify(matchDetails);
            }

        };

        factory.setBalling = function(balling) {
            if(localStorage.match1){
                var balling = {balling:balling};
                var match = JSON.parse(localStorage.match1);
                match.splice(1, 1, balling);
                localStorage.match1 = JSON.stringify(match);
            }else{
                var match = [];
                var balling = {balling:balling};
                match.push(balling);
                localStorage.match1 = JSON.stringify(match);
            }
        };


        factory.getMatch = function() {
            return JSON.parse(localStorage.match1);
        };

        factory.getMatchDetails = function() {
            return JSON.parse(localStorage.ballRunInsert1);
        };
        
        return factory;
    }

})(window.angular);

