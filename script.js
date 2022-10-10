
(function() {
    var sec = 75;
    function startTimer(){
    var timer = setInterval(function(){
     sec--;   
    document.getElementById("secs").innerHTML="00:"+sec;
    if (sec < 0) {
    clearInterval(timer);
    alert("Time is up")
        }
    }, 1000);
}
document.getElementById("incorrect").addEventListener("click", function() {
    sec -= 5;
    document.getElementById("timerDisplay").innerHTML="00:"+sec;
});
startTimer();
})();


// var now = new Date().getTime();
// var timeleft = countDownDate - now;

// var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);




// function switchScreen ($newScreen) {
//     if ($newScreen === $currentWindow) return;
//     HTMLVideoElement($currentWindow);

// }


// const startButton = document.getElementById("start-btn")
// const questionContainerElement = document.getElementById
// ("question-container")
// const questionElement = document.getElementById("question")
// const answerButtonsElement = document.getElementById("answer-buttons")

// startButton.addEventListener("click", startGame)


// function startGame() {
// startButton.classList.add("hide")
// currentQuestionIndex = 0
// questionContainerElement.classList.remove("hide")
// setNextQuestion()
// }

// function setNextQuestion() {
//     resetState()
// }

// function showQuestion(question) {
//     questionElement.innertext = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerText = answer.text
//         button.classList.add("btn")
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click", selectAnswer)
//         answerButtonsElement.appendChild(button)
//     })
// }

// function resetState() {
//     clearStatusClass(document.body)
//     nextButton.classList.add("hide")
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer() {



// }
// const questions = [
//     {
//         question: "",
//         answers: [
//             {text: "", correct: true },
//             {text: "", correct: false }
//         ]
//     }
// ]



// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add("correct")
//     } else {
//     element.classList.add("wrong")
// }
// }

