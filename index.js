function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  let spy = string.toUpperCase();
  console.log(spy);
}

function logWhisper(string) {
  let spy = string.toLowerCase();
  console.log(spy);
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  }
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  if (string === string) {
    return "I love you, too.";
  }
}
