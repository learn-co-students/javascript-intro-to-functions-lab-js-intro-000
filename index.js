// Returns all uppercase letters
function shout(string) {
  return string.toUpperCase()
}

// Returns all lowercase letters
function whisper(string) {
  return string.toLowerCase()
}

// Calls console.log to return shout()
function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
  if (string === lowercase) {
    return ("I can't hear you!")
  } else if (string === uppercase) {
    return ("YES INDEED!")
  } else if (string === "I love you, Grandma.") {
    return ("I love you, too.")
  } else {
    return ("I don't recognize what you are saying. :(")
  }
}
