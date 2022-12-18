var time = document.querySelector('.time');
var dateTime = document.querySelector('.date-time');

    function updateClock() {
     
    // aktuelle Uhrzeit bekommen        
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var milliseconds = now.getMilliseconds();
    
    // Zeit-Format
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      milliseconds = milliseconds < 100 ? '0' + milliseconds : milliseconds;

    // Zeit-Anzeige
      time.innerHTML = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
    }

    updateClock();
    setInterval(updateClock, 100);