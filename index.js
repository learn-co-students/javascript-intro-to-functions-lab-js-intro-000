function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}
/*
function sayHiToGrandma(sting) {
if (string === string.toLowerCase()) {
  return "I can't hear you!"
} else { (string === string.toUpperCase()) {
return "YES INDEED!"
} else if (string === "I love you, Grandma.") {
return "I love you, too."
}
}
*/
function sayHiToGrandma(string) {
switch(string) {
  case string.toLowerCase():
    return "I can't hear you!";
  case string.toUpperCase():
    return "YES INDEED!";
  case "I love you, Grandma.":
    return "I love you, too.";
}
}
