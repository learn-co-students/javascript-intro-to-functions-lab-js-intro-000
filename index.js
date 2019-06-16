function shout(toUpper){

  return toUpper.toUpperCase();
}

function whisper(toUpper){

  return toUpper.toLowerCase();
}

function logShout(toUpper){

  console.log(toUpper.toUpperCase());
}

function logWhisper(toUpper){

  console.log(toUpper.toLowerCase());
}

function sayHiToGrandma(saySomething){
  if (saySomething.toLowerCase() === saySomething){
    return "I can't hear you!";
  } else if(saySomething.toUpperCase() === saySomething){
    return "YES INDEED!";
  }else if (saySomething === "I love you, Grandma."){
    return "I love you, too.";
  }
}
