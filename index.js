function shout(param){
   return param.toUpperCase();
}

function whisper(param){
   return param.toLowerCase();
}

function logShout(param){
   console.log(param.toUpperCase());
}

function logWhisper(param){
   console.log(param.toLowerCase());
}

function sayHiToGrandma(param){
  if (param.toLowerCase() == param) {
     return "I can't hear you!";
  } else if (param.toUpperCase() == param){
    return "YES INDEED!";
  } else if (param == "I love you, Grandma.") {
    return "I love you, too.";
  }
}
