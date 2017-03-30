function shout(input){
  return input.toUpperCase();
}

function whisper(input){
  return input.toLowerCase();
}

function logShout(input){
  console.log(shout(input));
}

function logWhisper(input){
  console.log(whisper(input));
}

function sayHiToGrandma(input){
  if (input === "I love you, Grandma."){
    return "I love you, too."
  }
  else if (input === whisper(input)){
    return "I can\'t hear you!"
  }
  else if (input === shout(input)){
    return "YES INDEED!"
  }
}
