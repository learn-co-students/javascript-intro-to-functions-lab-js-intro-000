function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var toLowerCase = "I can't hear you!";
  var toUpperCase = "YES INDEED!";
  var mixedCase = "I love you, too.";
  if (string.toLowerCase(string) === string) {
    return toLowerCase;
  }
  else if (string.toUpperCase(string) === string) {
    return toUpperCase;
  }
  else if ("I love you, Grandma." === string) {
    return mixedCase
  }
}
