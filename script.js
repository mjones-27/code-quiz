var starCard = document.getElementById("startCard")
var timer = document.getElementById("timer")
var previousRes = "Correct!"
var secLeft = 75;

const quizArr = ["1. strings", "2. boolean", "3. alerts", "4. numbers"];

function quizTimer() {
    
    var timerInterval = setInterval(function(){
        secLeft--;
        timer.textContent = "time: " + secLeft;
    }, 1000)                            // * 1000 because they are in ms

    // TODO: end game when secLeft = 0
}

function startGame(){
    quizTimer();
    fillCard1();

}

// function fillCard1(){
//     var letterBtn = $("<button>");

//     // loop currently failing.  Revisit this later

//     // for (let i = 0; i < quizArr.length; i++) {
//     //     letterBtn.addClass("btn btn-primary quiz-button set1");
//     //     letterBtn.attr("data-question", quizArr[i]);
//     //     letterBtn.text(quizArr[i]);
//     //     $(quizCard1).append(letterBtn); 
//     //     // debugger;       
//     // }

//     letterBtn.addClass("btn btn-primary quiz-button set1");
//     letterBtn.attr("data-question", quizArr[0]);
//     letterBtn.text(quizArr[0]);
//     $(quizCard1).append(letterBtn);

//     letterBtn.addClass("btn btn-primary quiz-button set1");
//     letterBtn.attr("data-question", quizArr[1]);
//     letterBtn.text(quizArr[1]);
//     $(quizCard1).append(letterBtn);

//     letterBtn.addClass("btn btn-primary quiz-button true set1");
//     letterBtn.attr("data-question", quizArr[2]);
//     letterBtn.text(quizArr[2]);
//     $(quizCard1).append(letterBtn);

//     letterBtn.addClass("btn btn-primary quiz-button set1");
//     letterBtn.attr("data-question", quizArr[3]);
//     letterBtn.text(quizArr[3]);
//     $(quizCard1).append(letterBtn);

    
// }

$(".start-button").on("click", function(){
    quizTimer();

    // var letterBtn = $("<button>");
    
    // letterBtn.addClass("btn btn-primary quiz-button set1");
    // letterBtn.attr("data-question", quizArr[0]);
    // letterBtn.text(quizArr[0]);

    // debugger ;

    // $(quizCard1).append(letterBtn);



    // debugger;


    startCard.classList.add("hide");
    quizCard1.classList.remove("hide");

    // startGame();
  });

  $(".set1").on("click", function() {      
  
    quizCard1.classList.add("hide");
    quizCard2.classList.remove("hide");
    badResult1.classList.remove("hide");

    console.log(timer.textContent);
    console.log(secLeft);
    secLeft-=10;
    console.log(secLeft);
    timer.textContent = "time: " + secLeft;

    // goodResult1.classList.remove("hide");


  });

  $(".set1True").on("click", function() { 
    quizCard1.classList.add("hide");
    quizCard2.classList.remove("hide");
    // badResult1.classList.remove("hide");
    goodResult1.classList.remove("hide");
  });

  $(".set2").on("click", function() {
       
    quizCard2.classList.add("hide");
    quizCard3.classList.remove("hide");
    badResult2.classList.remove("hide");
    // goodResult2.classList.remove("hide");
  });

  $(".set2True").on("click", function() { 
    quizCard2.classList.add("hide");
    quizCard3.classList.remove("hide");
    // badResult2.classList.remove("hide");
    goodResult2.classList.remove("hide");
  });

  $(".set3").on("click", function() {    
    quizCard3.classList.add("hide");
    quizCard4.classList.remove("hide");
    badResult3.classList.remove("hide");
    // goodResult3.classList.remove("hide");
  });

  $(".set3True").on("click", function() { 
    quizCard3.classList.add("hide");
    quizCard4.classList.remove("hide");
    // badResult3.classList.remove("hide");
    goodResult3.classList.remove("hide");
  });

  $(".set4").on("click", function() {    
    quizCard4.classList.add("hide");
    quizCard5.classList.remove("hide");
    badResult4.classList.remove("hide");
    // goodResult4.classList.remove("hide");
  });

  $(".set4True").on("click", function() { 
    quizCard4.classList.add("hide");
    quizCard5.classList.remove("hide");
    // badResult4.classList.remove("hide");
    goodResult4.classList.remove("hide");
  });

  $(".set5").on("click", function() {    
    quizCard5.classList.add("hide");
    endCard.classList.remove("hide");
    badResult5.classList.remove("hide");
    // goodResult5.classList.remove("hide");
  });

  $(".set5True").on("click", function() { 
    quizCard5.classList.add("hide");
    endCard.classList.remove("hide");
    // badResult5.classList.remove("hide");
    goodResult5.classList.remove("hide");
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



  