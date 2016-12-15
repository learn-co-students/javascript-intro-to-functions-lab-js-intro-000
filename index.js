function shout(inputString){
  return inputString.toUpperCase();
}

function whisper(inputString){
  return inputString.toLowerCase();
}

function logShout(inputString){
  console.log(inputString.toUpperCase());
}

function logWhisper(inputString){
  console.log(inputString.toLowerCase());
}

function sayHiToGrandma(inputString){
  if(inputString.toLowerCase() === inputString) {
    return "I can't hear you!";
  }else if(inputString.toUpperCase() === inputString){
    return "YES INDEED!";
  }else if(inputString === "I love you, Grandma."){
    return "I love you, too.";
  }
}