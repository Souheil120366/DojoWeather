var tempUnit="C";

function removeCookie () {
  document.querySelector ('#cookie').remove ();
}
function convertTemp (element) {
  var tempH = 0, tempC = 0;
  if (element.value == '°F' && tempUnit=="C") {
    for (let i = 0; i < 4; i++) {
      tempH = document.querySelectorAll ('.temp p')[i].innerText;
      tempH = Math.round (tempH.substring (0, tempH.length - 1) * 9 / 5 + 32);
      document.querySelectorAll ('.temp p')[i].innerText = tempH+"°";
      tempC = document.querySelectorAll ('.temp span')[i].innerText;
      tempC = Math.round (tempC.substring (0, tempC.length - 1) * 9 / 5 + 32);
      document.querySelectorAll ('.temp span')[i].innerText = tempC+"°";
    }
    tempUnit="F";
  }
 else 
 if (element.value == '°C' && tempUnit=="F") {
    for (let i = 0; i < 4; i++) {
      tempH = document.querySelectorAll ('.temp p')[i].innerText;
      tempH = Math.round ((tempH.substring (0, tempH.length - 1)-32) * 5/9);
      document.querySelectorAll ('.temp p')[i].innerText = tempH+"°";
      tempC = document.querySelectorAll ('.temp span')[i].innerText;
      tempC = Math.round ((tempC.substring (0, tempC.length - 1)-32) * 5/9);
      document.querySelectorAll ('.temp span')[i].innerText = tempC+"°";
    }
    tempUnit="C";
  }
}
