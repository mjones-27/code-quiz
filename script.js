var starCard = document.getElementById("startCard")
var timer = document.getElementById("timer")

function quizTimer() {
    var secLeft = 75;
    var timerInterval = setInterval(function(){
        secLeft--;
        timer.textContent = "time: " + secLeft;
    }, 1000)                            // * 1000 because they are in ms
}

$(".start-button").on("click", function() {    quizTimer();
    startCard.classList.add("hide");
    quizCard1.classList.remove("hide");
  });

  $(".set1").on("click", function() { 
    quizCard1.classList.add("hide");
    quizCard2.classList.remove("hide");
  });

  $(".set2").on("click", function() {
       
    quizCard2.classList.add("hide");
    quizCard3.classList.remove("hide");
  });

  $(".set3").on("click", function() {    
    quizCard3.classList.add("hide");
    quizCard4.classList.remove("hide");
  });

  $(".set4").on("click", function() {    
    quizCard4.classList.add("hide");
    quizCard5.classList.remove("hide");
  });

  $(".set5").on("click", function() {    
    quizCard5.classList.add("hide");
    endCard.classList.remove("hide");
  });

  $(".submit-button").on("click", function() {    
    endCard.classList.add("hide");
    highCard.classList.remove("hide");
  });

  $(".back-button").on("click", function() {    
    highCard.classList.add("hide");
    startCard.classList.remove("hide");
  });

  $(".clear-button").on("click", function() {    
    endCard.classList.add("hide");
    highCard.classList.remove("hide");
  });

