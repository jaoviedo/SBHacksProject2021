//Your JavaScript code will go here!
window.onload = function() {
    this.alert("Loaded!");
}

function changeColor1() {
    var newColor = prompt("Please Enter your Color:", "Color")
    if(newColor != null){
        var elem = document.getElementById('circle1');
        elem.style.background = newColor;
    }
  }
  function changeColor2() {
    var newColor = prompt("Please Enter your Color:", "Color")
    if(newColor != null){
        var elem = document.getElementById('circle2');
        elem.style.background = newColor;
    }
  }
  function changeColor3() {
    var newColor = prompt("Please Enter your Color:", "Color")
    if(newColor != null){
        var elem = document.getElementById('circle3');
        elem.style.background = newColor;
    }
  }
  function changeColor4() {
    var newColor = prompt("Please Enter your Color:", "Color")
    if(newColor != null){
        var elem = document.getElementById('circle4');
        elem.style.background = newColor;
    }
  }
  function evalGuess(){
    var elem1 = document.getElementById('circle1');
    var elem2 = document.getElementById('circle2');
    var elem3 = document.getElementById('circle3');
    var elem4 = document.getElementById('circle4');
    
  }

function getRandomColors(){
  var colorList = ["red", "orange", "yellow", "green", "blue", "violet", "white", "black" ]
  var generated = 30;
  var outputArr = [];
  var i;
  for (i = 0; i < 4; i++){
    generated = Math.floor(Math.random() * 8);
    outputArr.push(colorList[generated]);
  }
}