function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {
  var word =
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowerStr = "I can't hear you!";
  var upperStr = "YES INDEED!";
  var newStr = "I love you, too.";

  if (string.toLowerCase() === string) {
    return lowerStr;
  } else if (string.toUpperCase() === string) {
    return upperStr;
  } else if ("I love you, Grandma." === string) {
    return newStr;
  }
}
