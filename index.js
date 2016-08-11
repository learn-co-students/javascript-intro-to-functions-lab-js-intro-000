function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if ("I can't hear you!".toLowerCase()) {
    return("I can't hear you!");
  }
  else if ("YES INDEED!".toUpperCase()){
    return("YES INDEED!");
  }
  else if ("I love you, Grandma.".toEqual()) {
    return("I love you, too.");
  }
}
