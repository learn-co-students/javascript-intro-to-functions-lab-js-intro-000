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
  var str = string;
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } if (str.toLowerCase() === string) {
    return "I can't hear you!";
  } if (str.toUpperCase() === string) {
    return "YES INDEED!"
  } 
}

