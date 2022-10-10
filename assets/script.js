
(function() {
    var sec = 75;
    function startTimer(){
    console.log("timer counts down")
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