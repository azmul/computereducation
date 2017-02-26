(function(angular){
    'use strict';
    angular.module('CricketApp')
        .factory('BallRunCalculationService', constructor);

    constructor.$inject = [];
    function constructor(){

        var factory = {};
        
        factory.ballRunInsert = function(randRun ,comment, Wicket,ball,over){
            var run;
            if(randRun === 'NB' || randRun === 'W'){
                run = 1;
            }
            else{
                run = Number(randRun);
                if(isNaN(run)){
                    run = 0;
                }
            }

            var matchInfo = {runs:run,ball:ball,over:over,wicket:Wicket,comment:comment};
            if(!localStorage.ballRunInsert1){
                var match = [];
                match.push(matchInfo);
                localStorage.ballRunInsert1 = JSON.stringify(match);
            }else{
                var matchDetails = JSON.parse(localStorage.ballRunInsert1);
                matchDetails.push(matchInfo);
                localStorage.ballRunInsert1 = JSON.stringify(matchDetails);
            }
            
        };
        
        factory.ballRunCalculation = function(randRun ,comment, Wicket){

            var run;
            if(randRun === 'NB' || randRun === 'W'){
                run = 1;
            }
            else{
                run = Number(randRun);
                if(isNaN(run)){
                    run = 0;
                }
            }

            if(localStorage.match1){
                var matchDetails = JSON.parse(localStorage.match1);
                if(matchDetails.length == 2){
                    var matchInfo = {runs:run,ball:1,wicket:Wicket,comment:comment};
                    matchDetails.splice(2, 1, matchInfo);
                    localStorage.match1 = JSON.stringify(matchDetails);
                }else{
                    var totalRun = matchDetails[2].runs + run;
                    var totalBall = matchDetails[2].ball + 1;
                    var totalWicket = matchDetails[2].wicket + Wicket;
                    var matchInfo = {runs:totalRun,ball:totalBall,wicket:totalWicket,comment:comment};
                    matchDetails.splice(2, 1, matchInfo);
                    localStorage.match1 = JSON.stringify(matchDetails);
                }
            }
            
        };

        return factory;
    }

})(window.angular);

