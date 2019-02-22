

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
  if (string.toUpperCase() == "I LOVE YOU, GRANDMA.") {
    return "I love you, too."
  }
  if (string.toUpperCase() != string) {
    return "I can't hear you!"
  }
  // string must be uppercase if passed above test
  return "YES INDEED!"
}
