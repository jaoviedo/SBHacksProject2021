//Your JavaScript code will go here!
window.onload = function() {
    this.alert("Loaded!");
}

var submittedColors = ["lightblue","lightblue","lightblue","lightblue"];
var correctColors = getRandomColors();
window.alert(correctColors); 

function changeColor1() {
    var newColor = prompt("Please Enter your Color:", "Color")
    if(newColor != null){
        submittedColors[0] = newColor;
        var elem = document.getElementById('circle1');
        elem.style.background = newColor;
    }
  }
  function changeColor2() {
    var newColor = prompt("Please Enter your Color:", "Color")
    if(newColor != null){
        submittedColors[1] = newColor;
        var elem = document.getElementById('circle2');
        elem.style.background = newColor;
    }
  }
  function changeColor3() {
    var newColor = prompt("Please Enter your Color:", "Color")
    if(newColor != null){
        submittedColors[2] = newColor;
        var elem = document.getElementById('circle3');
        elem.style.background = newColor;
    }
  }
  function changeColor4() {
    var newColor = prompt("Please Enter your Color:", "Color")
    if(newColor != null){
        submittedColors[3] = newColor;
        var elem = document.getElementById('circle4');
        elem.style.background = newColor;
    }
  }
  function evalGuess(){
    var points = 0;
    var i;
    for (i = 0; i < 4; i++){
      if(submittedColors[i] == correctColors[i]){
        points++;
      }
    }
    return points;
  }


  function eval(){
    this.alert("Guess Submitted!");
    var points = evalGuess();
    if(points == 4){
      window.alert("You WIN!!!!!!!!");
      location.reload();
    }else{
      window.alert("WRONG! You got " + points + " points...");
    }
    
  }
function getRandomColors(){
  var colorList = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black" ]
  var generated = 0;
  var outputArr = [];
  var i;
  for (i = 0; i < 4; i++){
    generated = Math.floor(Math.random() * 4);
    outputArr.push(colorList[generated]);
  }
  return outputArr;
}
