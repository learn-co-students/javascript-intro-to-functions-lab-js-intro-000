//index.js was completely blank when starting Lab
function shout(string) {
  return string.toUpperCase ()  // receives one arguement, "string",  and returns it in all caps
}

function whisper(string) {
  return string.toLowerCase() // receives one arguement, "string",  and returns it in lowercase
}

function logShout(string) {
  console.log (string.toUpperCase()) // logShout(string) calls console.log() its one argument in all caps
}

function logWhisper(string) {
  console.log (string.toLowerCase()) //logWhisper(string) calls console.log() its one argument in all lowercase
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase())
  return "I can't hear you!" // sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase
  else if (string === string.toUpperCase())
  return "YES INDEED!" // sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase
  else if (string === "I love you, Grandma.")
  return "I love you, too." // sayHiToGrandma(string) returns "I love you, too." if `string` is "I love you, Grandma."`
}
