const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Commonly used data types DO Not include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3
    
    },
    {
        question: "The condition in an if / else statement is enclosed with _______",
        choice1: "curly brackets",
        choice2: "parenthesis",
        choice3: "quotes",
        choice4: "square brackets",
        answer: 2
    
    },
    {
        question: "Which operator is used to represent AND statements?",
        choice1: "||",
        choice2: "+",
        choice3: "$",
        choice4: "&&",
        answer: 4
    

    },
    {
        question: "Arrays in Javascript can be used to store _______",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    
    
    },
    {
        question: "What does CSS stand for",
        choice1: "Central Style Sheets",
        choice2: "Cascading Style Sheets",
        choice3: "Cascading Simple Sheets",
        choice4: "Cars SUVs Sailboats", 
        answer: 2
    }
    ];

    //CONSTANTS
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 5;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
    };


    getNewQuestion = () => {
        if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem("mostRecentScore", score);
            return window.location.assign("highscores.html");
        }
        
        questionCounter++;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach( choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        });

        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };


    choices.forEach(choice => {
        choice.addEventListener("click", e => {
            if(!acceptingAnswers) return;
            
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];

            const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if (classToApply === "correct") {
                incrementScore(CORRECT_BONUS);
            }

            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout( () => {
                selectedChoice.parentElement.classList.remove(classToApply); 
                getNewQuestion();

            }, 1000);
           
        });
    });

incrementScore = num => {
    score += num;
    scoreText.innerText = score;     
}

startGame()


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


