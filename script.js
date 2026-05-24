
const display = document.getElementById("display");

// Add numbers or operators to display on screen whenever button is clicked //
function appendValue(value){
  display.value += value;
}

// This to Clear, empty the screen//
function clearDisplay(){
  display.value = "";
}

function calculate(){

  try{
    display.value = eval(display.value);
  }

  catch(error){
    display.value = "Error";
  }
}