function shout(string) {
  return (string.toUpperCase())
}

function whisper(string) {
  return (whisper.toLowerCase())
}

function logShout(string) {
  console.log(string.toUpperCase)
}

function logWhisper(string) {
  console.log(string.toLowerCase)
}

var uppercase = string.toUpperCase
var lowercase = string.toLowerCase
var love = "I love you, Grandma."
function sayHiToGrandma(string) {
  if (string === uppercase) {
    return("YES INDEED!")
  }
  else if (string === lowercase) {
    return("I can't hear you!")
  }
  else (string === love) {
    return("I love you, too.")
  }
}
