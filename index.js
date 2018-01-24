function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return ("I can't hear you!");
} if (string === string.toUpperCase())  {
  return ("YES INDEED!");
} else if (string === "I love you, Grandma.") {
  return ("I love you, too.");
}
  }

function logShout(string) {
  if (string.toLowerCase()) {
    console.log(string.toUpperCase());
  }
}

function logWhisper(string) {
  if (string.toUpperCase()) {
    console.log(string.toLowerCase());
  }
}
