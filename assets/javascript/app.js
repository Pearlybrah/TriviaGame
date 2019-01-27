$(".start").on("click", function() {
  $(".start").remove();
  game.start();
});

var questions = [
  {
    question: "Where are the Green Bay Packers from?",
    answers: ["Wisconsin", "Minnesota", "Chicago"],
    correctAnswer: "Wisconsin"
  },
  {
    question: "Who won the first Superbowl?",
    answers: ["Green Bay Packers", "Dallas Cowboys", "Kansas City Chiefs"],
    correctAnswer: "Green Bay Packers"
  },
  {
    question:
      "What Green Bay Packers quarterback holds the team record for most passing yards in a season?",
    answers: ["Aaron Rodgers", "Lynn Dickey", "Bart Starr"],
    correctAnswer: "Aaron Rodgers"
  },
  {
    question:
      "Who was on the receiving end of Brett Favre's first NFL completion?",
    answers: ["James Lofton", "Brett Favre", "Sterling Sharpe"],
    correctAnswer: "Brett Favre"
  },
  {
    question: "What are Green Bay Packers fans commonly called?",
    answers: ["Cheeseheads", "Cheesers", "The Pack"],
    correctAnswer: "Cheeseheads"
  },
  {
    question:
      "Who was the first Green Bay Packer to gain more than 8,000 career rushing yards?",
    answers: ["Ahman Green", "Aaron Jones", "Aaron Ripkowski", "Jim Taylor"],
    correctAnswer: "Jim Taylor"
  },
  {
    question:
      "What was Vince Lombardi's career record as Green Bay Packers head coach?",
    answers: ["84-42-0", "98-30-4", "212-106-21", "77-44-21"],
    correctAnswer: "98-30-4"
  },
  {
    question: "What team originally drafted Brett Favre?",
    answers: [
      "Atlanta Falcons",
      "Dallas Cowboys",
      "Green Bay Packers",
      "San Francisco 49ers"
    ],
    correctAnswer: "Atlanta Falcons"
  },
  {
    question: "What college did Aaron Rodgers get drafted from?",
    answers: ["UC San Diego", "Chico State", "UC Berkeley", "Ohio State"],
    correctAnswer: "UC Berkeley"
  },
  {
    question: "Who was the Green Bay Packers very first draft choice?",
    answers: ["Bart Starr", "Eddie Jankowski", "Russ Letlow", "Don Huston"],
    correctAnswer: "Russ Letlow"
  }
];

$(document).on("click", "#end", function() {
  game.done();
});

let game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#questions").prepend(
      "<h2> Time Remaining: <span id='counter'>120</span> Seconds</h2>"
    );
    for (let i = 0; i < questions.length; i++) {
      $("#questions").append("<h2>" + questions[i].question + "</h2>");
      for (let j = 0; j < questions[i].answers.length; j++) {
        $("#questions").append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answers[j] +
            "'>" +
            " " +
            questions[i].answers[j] +
            " " +
            "<br>"
        );
      }
    }
    $("#questions").append("<br><button id='end'>Done</button>");
  },
  done: function() {
    $.each($("input [name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-1']:checked"), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input [name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#questions h2").remove();
    $("#questions").html("<h2>All Done...</h2>");
    $("#questions").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#questions").append(
      "<h3>Incorrect Answers: " + this.incorrect + "</h3>"
    );
    $("#questions").append(
      "<h3>Unanswerd: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};
