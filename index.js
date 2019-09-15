function shout(aCall){
  return aCall.toUpperCase();
}

function whisper(aCall){
  return aCall.toLowerCase();
}

function logShout(aCall){
  console.log(aCall.toUpperCase());
}

function logWhisper(aCall){
  console.log(aCall.toLowerCase());
}

function sayHiToGrandma(aCall){
  if(aCall.toLowerCase() === aCall){
    return "I can't hear you!";
  }else if(aCall.toUpperCase() === aCall){
    return "YES INDEED!";
  }else{
    if(aCall === "I love you, Grandma."){
      return "I love you, too.";
    }
    return aCall;
  }
}