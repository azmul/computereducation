(function(angular){
    'use strict';
    angular.module('CricketApp')
        .controller('PlayController', constructor);

    constructor.$inject = ['$scope','$location','SelectedBattingBallingService','BallRunCalculationService'];
    function constructor($scope,$location,SelectedBattingBallingService,BallRunCalculationService){
        var vm  = this;
        var matchInfo;
        var runs = ['1','2','3','4','5','6','NB','W','WC'];
        vm.ball = 0;
        vm.over = 0;
        vm.totalRun = 0;
        vm.totalWicket = 0;
        vm.showTotal = true;
       function init() {
           matchInfo = SelectedBattingBallingService.getMatch();
           vm.matchDetails = SelectedBattingBallingService.getMatchDetails();

           vm.ballingCountryName = matchInfo[1].balling.name;
           vm.ballingCountryImg = matchInfo[1].balling.img;

           vm.battingCountryName = matchInfo[0].bating.name;
           vm.battingCountryImg = matchInfo[0].bating.img;

           if(matchInfo.length >= 3){
               vm.over = Math.floor((matchInfo[2].ball)/6);
               vm.ball = (matchInfo[2].ball)%6;
               vm.totalRun = matchInfo[2].runs;
               vm.totalWicket = matchInfo[2].wicket;
           }else{}

       }
        
        vm.bowl = function(){

            var comment;
            var Wicket = 0;
            var randRun = runs[Math.floor(Math.random() * runs.length)];
            if(randRun === '1'){
                comment = '1 run';
            }else if(randRun === '1'){
                comment = '1 run';
            }else if(randRun === '2'){
                comment = '2 runs';
            }else if(randRun === '3'){
                comment = '3 runs';
            }else if(randRun === '4'){
                comment = 'excellent 4 runs';
            }else if(randRun === '5'){
                comment = 'hahaha 5 runs';
            }else if(randRun === '6'){
                comment = 'wow 6 runs';
            }else if(randRun === 'NB'){
                comment = '1 run No Ball';
            }else if(randRun === 'W'){
                comment = '1 run W';
            }else {
                comment = 'Out !';
                Wicket = 1;
            }

            BallRunCalculationService.ballRunCalculation(randRun, comment, Wicket);

            matchInfo = SelectedBattingBallingService.getMatch();
            if(matchInfo[2].ball < 13){
                vm.over = Math.floor((matchInfo[2].ball)/6);
                vm.ball = (matchInfo[2].ball)%6;
                BallRunCalculationService.ballRunInsert(randRun, comment, Wicket,vm.ball,vm.over);
            }else{}

            if(matchInfo[2].ball < 13){
                $location.path('/'+'1'+'/'+vm.over+'/'+vm.ball);
            }else{
                alert("Game Finish");
            }
            vm.showTotal = true;
        };

        vm.getSummary = function(over, ball){
           vm.showTotal = false;
           var totalBall = over*6+ball;
           var matchSummary = SelectedBattingBallingService.getMatchDetails();
           var totalRun = 0;
           var totalWicket = 0;
           for(var i=0;i<totalBall;i++){
               totalRun = totalRun + matchSummary[i].runs ;
               totalWicket = totalWicket + matchSummary[i].wicket;
           }
            vm.overSummary = over;
            vm.ballSummary = ball;
            vm.totalRunSummary = totalRun;
            vm.totalWicketSummary = totalWicket;
        };

        vm.backToDetails = function(){
            vm.showTotal = true;
        };

        init();
    }
    
})(window.angular);


