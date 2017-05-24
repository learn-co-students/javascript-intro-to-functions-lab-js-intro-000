function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var shout = string.toUpperCase();
  return console.log(shout);
}

function logWhisper(string) {
  var whisper = string.toLowerCase();
  return console.log(whisper);
}

function sayHiToGrandma(string) {
  var response="";
  if(string === string.toUpperCase()) {
    response = "YES INDEED!";
  } else if(string=== string.toLowerCase()) {
    response = "I can't hear you!";
  } else if (string === "I love you, Grandma."){
    response = "I love you, too."
  }
  return response;
}
