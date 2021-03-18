function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var firstString = "I can't hear you!";
  var secondString = "YES INDEED!";
  var thirdString = "I love you, too.";

  if(string.toLowerCase(string) === string) {
    return firstString;
  }
  else if (string.toUpperCase(string) === string) {
    return secondString;
  }
  else {
    return thirdString;
  }
}
