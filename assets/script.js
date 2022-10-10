
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

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
    element.classList.add("wrong")
}
}