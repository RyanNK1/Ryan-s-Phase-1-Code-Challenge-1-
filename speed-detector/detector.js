function checkSpeed() {
    let speed = parseInt(document.getElementById("speed").value);
    let demeritPoints = 0;
    //Speed checker
    if (speed < 70) {
      document.getElementById("result").innerHTML = "Ok";
    } else {
      demeritPoints = Math.floor((speed - 70) / 5);
      document.getElementById("result").innerHTML = "Demerit Points: " + demeritPoints;
      //Excessive demerit points
      if (demeritPoints >= 12) {
        document.getElementById("result").innerHTML += "<br>License suspended";
      }
    }
  }