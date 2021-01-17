//Your JavaScript code will go here!
window.onload = function() {
    this.alert("Loaded!");
}

var guessNum = 0;
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

  function evalPosition(){
    var points = 0;
    var i;
    for (i = 0; i < 4; i++){
      if(submittedColors[i] == correctColors[i]){
        points++;
      }
    }
    return points;
  }

  function evalColor(){
    var points = 0;
    var positioned = evalPosition();
    var i;
    var j;
    for(i = 0; i < 4; i++){
      for(j = 0; j < 4; j++){
        if(correctColors[i] == submittedColors[j]){
          points++;
        }
      }
    }
    return points;
  }

function updateTable(){
  var num1 = 1 + guessNum*4;
  var num2 = 2 + guessNum*4;
  var num3 = 3 + guessNum*4;
  var num4 = 4 + guessNum*4;
  var temp1 = 'entry' + num1;
  var temp2 = 'entry' + num2;
  var temp3 = 'entry' + num3;
  var temp4 = 'entry' + num4;
  var elem1 = document.getElementById(temp1);
  elem1.textContent = submittedColors[0];
  var elem2 = document.getElementById(temp2);
  elem2.textContent = submittedColors[1];
  var elem3 = document.getElementById(temp3);
  elem3.textContent = submittedColors[2];
  var elem4 = document.getElementById(temp4);
  elem4.textContent = submittedColors[3];
}

  function eval(){
    this.alert("Guess Submitted!");
    var positioned = evalPosition();
    var matched = evalColor();
    if(positioned == 4){
      window.alert("You WIN!!!!!!!!");
      location.reload();
    }else{
      if(guessNum == 9){
        window.alert("You Lose! Out of Guesses.");
        window.alert("Correct Answer: " + correctColors);
        location.reload();
      }
      window.alert("WRONG! " + positioned + " color(s) are in the correct position and " + matched + " matching color(s).");
      updateTable();
      guessNum++;
    }
    
  }
function getRandomColors(){
  var colorList = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black"]
  var generated = 0;
  var outputArr = [];
  var i;
  var j;
  var inList = false;
  for (i = 0; i < 4; i++){
    inList = false;
    generated = Math.floor(Math.random() * 8);
    for(j = 0; j < i; j++){
      if(outputArr[j] == colorList[generated]){
        i--;
        inList = true;
      }
    }
    if(!inList){
      outputArr.push(colorList[generated]);
    }
  }
  return outputArr;
}
