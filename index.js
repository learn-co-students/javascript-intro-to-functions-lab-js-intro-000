function shout(string){
  return string.toUpperCase();
}

function logShout(string){
  console.log((string.toUpperCase()));
}

function whisper(string){
  return string.toLowerCase();
}

function logWhisper(string){
  console.log((string.toLowerCase()));
}

function sayHiToGrandma(string){
  var uppercaseHi = string.toUpperCase()
  if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
  else if ( uppercaseHi != string){
    return "I can't hear you!";
  }
  else if (uppercaseHi === string) {
    return "YES INDEED!";
  }
}
