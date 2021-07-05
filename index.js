function shout(string) {
  return string.toUpperCase();
}
shout("hello");

function whisper(string) {
  return string.toLowerCase();
}
whisper("HELLO");

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  if(string.toLowerCase() === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === string) {
     return "YES INDEED!"
  } else if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
