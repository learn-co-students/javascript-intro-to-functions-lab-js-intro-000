function shout(text){
  return text.toUpperCase();
}

function whisper(text){
  return text.toLowerCase();
}

function logShout(text){
  var upper = text.toUpperCase();
  console.log(upper);
}

function logWhisper(text){
  var lower = text.toLowerCase();
  console.log(lower);
}

function sayHiToGrandma(text){
  var lower = text.toLowerCase();
  var upper = text.toUpperCase();
  if(lower === text){
    return "I can't hear you!";
  }
  else if(upper === text){
    return "YES INDEED!";
  }
  else if(text === "I love you, Grandma."){
    return "I love you, too."
  }
}
