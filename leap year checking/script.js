function checkLeapYear() {
    var year = document.getElementById("year").value;
    var result = document.getElementById("result");
  
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
      result.innerHTML = year + " is a leap year.";
    } else {
      result.innerHTML = year + " is not a leap year.";
    }
  }