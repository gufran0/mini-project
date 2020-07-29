let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let displayMilliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;

// call the given function
let interval = null;


let status = "stopped";


//  create a function
// lets take fn as stopwatch dont pass any argurments

function stopwatch(){
  milliseconds ++;

  if (milliseconds/60 === 1){
    milliseconds = 0;
    seconds++;

  if(seconds / 60 === 1){
    seconds = 0;
    minutes++;

  }
}

// if it is one digit 
if(milliseconds < 10){
  displayMilliseconds = "0" +seconds.toString();
  
}
else{
  displayMilliseconds = milliseconds;

}
if(seconds < 10){
  displaySeconds = "0" + seconds.toString();
}
else{
  displaySeconds = seconds;
}
if(minutes < 10){
  displayMinutes = "0" + minutes.toString();

}
else{
  displayMinutes = minutes
}
document.getElementById("display").innerHTML = displayMinutes +":" + displaySeconds +":" + displayMilliseconds; 


}


function startStop(){
  if(status === "stopped"){
    interval = window.setInterval(stopwatch , 10);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started"

  }
  else{
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped"
  }
}


function reset(){
  window.clearInterval(interval)
  milliseconds = 0
  seconds = 0
  minutes = 0
  document.getElementById("display").innerHTML= "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}