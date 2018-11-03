function shout(whatToShout){
  return whatToShout.toUpperCase();
}
function whisper(whatToWhisper){
  return whatToWhisper.toLowerCase();
}
function logShout(whatToLog){
  console.log(whatToLog.toUpperCase());
}
function logWhisper(whatToLog){
  console.log(whatToLog.toLowerCase());
}
function sayHiToGrandma(inputString){
  if (inputString === "I love you, Grandma."){
    return "I love you, too.";
  }else if (inputString === inputString.toLowerCase()){
    return "I can't hear you!";
  }else if (inputString === inputString.toUpperCase()) {
    return "YES INDEED!";
  }
}
