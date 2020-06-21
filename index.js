function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return("I can\'t hear you!");
  }
  else if (string.toUpperCase() === string){
    return("YES INDEED!");
  }
  else if (string === "I love you, Grandma."){
    return("I love you, too.");
  }
  else {
    return; // grandma says nothing.
    // apparently "return()" is not a valid thingy and breaks everything. similarly for "else ()".
  }

  /*
  string.toLowerCase() === string
  string.toUpperCase() === string
  string === "I love you, Grandma."
  */
}
