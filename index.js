function shout(str) {
  return str.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if(string.toLowerCase() == string) {
    return "I can't hear you!"
  }
  else if (string.toUpperCase() == string) {
    return "YES INDEED!"
  }
  else if (string == 'I love you, Grandma.') {
    return "I love you, too."
  }
}
