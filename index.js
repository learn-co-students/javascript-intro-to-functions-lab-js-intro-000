function shout(phrase) {
  var message = phrase.toUpperCase();
  return message;
}

function whisper(phrase) {
  return phrase.toLowerCase();
}

function logShout(phrase) {
    console.log(shout(phrase));
}

function logWhisper(phrase) {
    console.log(whisper(phrase));
}

function isUpperCase(string) {
  return string === string.toUpperCase();
}

function isLowerCase(string) {
  return string === string.toLowerCase();
}

function sayHiToGrandma(string) {
  if (isUpperCase(string))
  {
    return "YES INDEED!"
  } else if (isLowerCase(string)) {
    return "I can't hear you!"
  } else if (string === "I love you, Grandma.") {
    return"I love you, too."
  }
}
