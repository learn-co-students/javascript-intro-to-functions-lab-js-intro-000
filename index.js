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
  var stringLower = string.toLowerCase();
  var stringUpper = string.toUpperCase();
  var stringLoveYou = "I love you, Grandma.";
  if (string == stringLower) {
    return "I can't hear you!";
  } else if (string == stringUpper) {
    return "YES INDEED!";
  } else if (string == stringLoveYou) {
    return "I love you, too.";
  }
}
