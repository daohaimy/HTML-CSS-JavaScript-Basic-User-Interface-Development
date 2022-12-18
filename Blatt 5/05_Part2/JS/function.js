function uhr(){
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var milliseseconds = now.getMilliseconds();

if (hours < 10){
    hours = "0" + hours;
}
if (minutes < 10){
    minutes = "0" + minutes;
}
if (seconds < 10){
    seconds = "0" + seconds;
}
if (milliseseconds <= 9){
    milliseseconds = "0" + milliseseconds;
}
if (milliseseconds <= 99){
    milliseseconds = "0" + milliseseconds;
}

var time = document.querySelector('h1');

time.innerHTML = hours + ":" + minutes + ':' + seconds + '.' + milliseseconds;
}

setInterval(uhr, 0);