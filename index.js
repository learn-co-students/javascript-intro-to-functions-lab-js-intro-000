function shout(message){
  return message.toUpperCase();
}

function whisper(message){
  return message.toLowerCase();
}

function logShout(message){
  var result = shout(message);
  console.log(result);
}

function logWhisper(message){
  var result = whisper(message);
  console.log(result);
}

function sayHiToGrandma(message){
  if(message === "I love you, Grandma."){
    return "I love you, too.";
  }
  return message === message.toUpperCase() ? "YES INDEED!" : "I can't hear you!";
}
