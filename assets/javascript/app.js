
$(document).ready(function(){


    
    var game = {
      wins: 0,
      losses: 0,
      empty: 0,
      userPick: null
    };

    function reset() {
        game = {
            wins: 0,
            losses: 0,
            empty: 0,
            userPick: null
        };
    };

    var trivia = {
      question: ["When did the packers win their first superbowl?",
      "Who is the oldest football team?", "Best ranked QB in the league is AAron Rodgers?"],
    }

    $(".button").on("click", function() {
        
        trivia.checker = function(){
            if (userPick === true) {
                wins++;
                return true;
            } else if (userPick === false) {
                losses++;
                return true;
            } else if (userPick === null){
                empty++;
                return false;
            }
        };

        setTimeout(trivia.tenSec, 1000 * 5);
        setTimeout(trivia.twentySec, 1000 * 10);
        setTimeout(trivia.thirtySec, 1000 * 20);
        setTimeout(trivia.timeUp, 1000 * 30);

        trivia.printStats = function() {
            $("#right").text(game.wins);
            $("#wrong").text(game.losses);
            $("#void").text(game.empty);
        };

        trivia.tenSec = function() {
            $("#timer").text("30 Seconds to go!");
            $("#questions").text(trivia.question[0]);
        };
        trivia.twentySec = function() {
            $("#timer").text("20 Seconds to go!");
            $("#questions").text(trivia.question[1]);
        };
        trivia.thirtySec = function() {
            $("#timer").text("10 Seconds to go!");
            $("#questions").text(trivia.question[2]);
        };
        trivia.timeUp = function() {
            $("#timer").text("Time is Up!");
            trivia.printStats() 
            setTimeout(reset, 1000 * 30);
        };
    });

});
