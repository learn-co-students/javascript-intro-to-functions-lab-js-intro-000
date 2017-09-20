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
  //Must check to see if string is lower case letters.
  if (string === string.toLowerCase()) {
    return("I can't hear you!");
  }
  //Must check to see if string is upper case letters.
  else if (string === string.toUpperCase()) {
    return("YES INDEED!");
  }
  /*Must check to see if "I love you, Grandma."
  is equal to "I love you, too."*/
  else if (string === string) {
    return("I love you, too.");
  }
}
