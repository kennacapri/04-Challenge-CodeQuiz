var myfunc = setinterval(function() {
    //
}, 1000)

var now = new Date().getTime();
var timeleft = countDownDate - now;

var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


document.getElementById("secs").innerHTML = seconds + "s"