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

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}



// function sayHiToGrandma(string) {
//   var uppercase = "HELLO"
//   uppercase.toUpperCase()
//   return "YES INDEED!"
// }
//
// function sayHiToGrandma(string) {
//   var mixedCase = "I love you, Grandma."
//   uppercase.toMixedCase()
//   return "I love you, too."
// }
