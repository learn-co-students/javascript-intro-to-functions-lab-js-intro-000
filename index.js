var lowercase = "hello"
var uppercase = "HELLO"
var mixedcase = "I love you, Grandma."

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string){
  if (string === lowercase) {
    return("I can't hear you!")
  }
  else if (string === uppercase) {
    return("YES INDEED!")
  }
    else if (string === mixedcase) {
      return("I love you, too.")
    }
  }
