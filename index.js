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
  var mystring = string.toLowerCase()
  console.log(mystring)
  // console.log(string.toUpperCase())
}

function sayHiToGrandma(string) {
var mystring = string
if (mystring.toLowerCase() === string) {
  return "I can\'t hear you!"
} else if (mystring.toUpperCase() === string) {
  return "YES INDEED!"
} else if (string = "I love you, Grandma.") {
  return "I love you, too."
}

}
