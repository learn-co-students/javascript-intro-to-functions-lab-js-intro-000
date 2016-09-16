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
  var uppercaseString = string.toUpperCase();
  var lowercaseString = string.toLowerCase();
  var grandma = "I love you, Grandma.";

  if(string === lowercaseString) {
    return "I can't hear you!";
  } else if (string === uppercaseString) {
    return "YES INDEED!";
  } else if (string === grandma) {
    return "I love you, too.";
  }
}
