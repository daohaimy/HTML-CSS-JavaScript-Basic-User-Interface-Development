var countDownDate = new Date("Nov 14, 2022 09:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10){
    hours = "0" + hours;
    }
    if (minutes < 10){
    minutes = "0" + minutes;
    }
    if (seconds < 10){
    seconds = "0" + seconds;
    }

  var time = document.querySelector('h1');
    time.innerHTML = days + " Tage " + hours + ":" + minutes + ":" + seconds;

  if (days >= 1){
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      }

  if (days == 1){
        time.innerHTML = days + " Tag " + hours + ":" + minutes + ":" + seconds;
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
      }

  if (days == 0){
     document.body.style.backgroundColor = "red";
     document.body.style.color = "white";
     }

  if (days == 0 && minutes < 5 && distance > 0){
        function play() {
            document.getElementById('tick').play();
        }
        setInterval(play, 1000);
  }

  if (distance < 0) {
        function pause(){
        document.getElementById('tick').pause(0);
        }
        setInterval(pause, 0); 

     clearInterval(x);
     time.innerHTML = "zu"+ "<br>" + "spät!";
     document.body.style.backgroundColor = "white";
     document.body.style.color = "black";
  }
}, 1000);