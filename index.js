 function shout(string) {
  return string.toUpperCase()
}

var uppercase = "HELLO!"
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
  var lowercase = string.toLowerCase();
  var uppercase = string.toUpperCase();
  if (string === lowercase) {
    return "I can\'t hear you!";
  } else if (string === uppercase) {
    return "YES INDEED!";
  }
    return "I love you, too."
  }
