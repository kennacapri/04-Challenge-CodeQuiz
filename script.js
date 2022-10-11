const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Commonly used data types DO Not include:",
        potentialAnswers: [
        "strings"
        "booleans"
        "alerts"
        "numbers"
    ],
    answer: "alerts"
    }
    {
        question: "The condition in an if / else statement is enclosed with _______",
        potentialAnswers: [
        "curly brackets"
        "parenthesis"
        "quotes"
        "square brackets"
    ],
    answer: "parenthesis"
    }
    {
        question: "Which operator is used to represent AND statements?",
        potentialAnswers: [
        "||"
        "+"
        "$"
        "&&"
    ],
    answer: "&&"

    }
    {
        question: "Arrays in Javascript can be used to store _______",
        potentialAnswers: [
        "numbers and strings"
        "other arrays"
        "booleans"
        "all of the above"
    ],
    answer: "alerts"
    
    }
    {
        question: "What does CSS stand for",
        potentialAnswers: [
        "Central Style Sheets"
        "Cascading Style Sheets"
        "Cascading Simple Sheets"
        "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets"
    }

        if()
        else()


// (function() {
//     var sec = 75;
//     function startTimer(){
//     var timer = setInterval(function(){
//      sec--;   
//     document.getElementById("secs").innerHTML="00:"+sec;
//     if (sec < 0) {
//     clearInterval(timer);
//     alert("Time is up")
//         }
//     }, 1000);
// }
// document.getElementById("incorrect").addEventListener("click", function() {
//     sec -= 5;
//     document.getElementById("timerDisplay").innerHTML="00:"+sec;
// });
// startTimer();
// })();

// function updateQuizTimer(time) {
//     if ($newScreen === $currentWindow) return;
//     showElement($currentWindow);
//     $prevWindow = $currentWindow;
//     showElement($newScreen);
//     $currentWindow = $newScreen;


// if (quiz.$currentQuestionIndex > 0) {
//     showElement($main);
//  } else {
//     hideElement($main, true);
// }
// }


function setTime() {
        var timeInterval = setInterval(function () {
        timer--;
        timeText.textContent = timer;
     
      if (timer === 0) {
        clearInterval(timerInterval);

        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("/end.html")
      }

    }, 1000);

    choices.forEach(choice => {
        choice.addEventListener("click", e => {
            if(!acceptingAnswers) return

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset["number"]

            let classToApply = selectedAnswer == currentQuestion.answer ? "correct"

            if (classToApply === ("correct")) {
                incrementScore(Score_Points)
            } else }
            | timer -= 10
            }