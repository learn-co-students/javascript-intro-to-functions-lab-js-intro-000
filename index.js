function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var string = "hello"

function logShout(string) {
  console.log (string.toUpperCase())
}


var string = "HELLO"

function logWhisper(string) {
  console.log (string.toLowerCase())
}
var string = "hello"
var string = "HELLO"
var string = "I love you, Grandma."

function sayHiToGrandma(string) {
  switch(string) {
  case "hello":
    return "I can\'t hear you!";
    break;
  case "HELLO":
    return "YES INDEED!";
    break;
  case "I love you, Grandma.":
    return "I love you, too.";
    break;
  }
}
