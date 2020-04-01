// The array of questions for our quiz game.
// var questions = [
//     { q: "The sky is blue.", a: "t" },
//     { q: "There are 365 days in a year.", a: "t" },
//     { q: "There are 42 ounces in a pound.", a: "f" },
//     { q: "The Declaration of Independence was created in 1745.", a: "f" },
//     { q: "Bananas are vegetables.", a: "f" }
//   ];

  // We start the game with a score of 0.
//   var score = 0;

  // Loop over every question object
//   for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    // var answer = confirm(questions[i].q);

    // Compare answers
    // if ((answer === true && questions[i].a === "t") ||
    //   (answer === false && questions[i].a === "f")) {
      // Increase score
//       score++;
//       alert("Correct!");
//     }
//     else {
//       alert("Wrong!");
//     }
//   }

  // Show total at end
//   alert("You got " + score + "/" + questions.length);


// PHASE 1

// PHASE 2
// TODO: display 5 sets of 4 questions
// TODO: start timer


// PHASE 3

// HIGHSCORE

// var targetDiv = document.getElementById("high");

var starCard = document.getElementById("startCard")
var timer = document.getElementById("timer")

function quizTimer() {
    var secLeft = 75;

    var timerInterval = setInterval(function(){
        secLeft--;
        timer.textContent = "time: " + secLeft;
    }, 1000)                            // * 1000 because they are in ms
}

$(".start-button").on("click", function() {
    // console.log("button pressed");
    quizTimer();
    startCard.classList.add("hide");
    quizCard1.classList.remove("hide");

  });

