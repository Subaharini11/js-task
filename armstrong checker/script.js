function checkArmstrong() {
    var num = document.getElementById("number").value;
    var sum = 0;
    var temp = num;
    var digits = temp.toString().length;
    while (temp > 0) {
      var remainder = temp % 10;
      sum += Math.pow(remainder, digits);
      temp = parseInt(temp / 10);
    }
    if (num == sum) {
      document.getElementById("result").innerHTML = num + " is an Armstrong number.";
    } else {
      document.getElementById("result").innerHTML = num + " is not an Armstrong number.";
    }
  }