function shout(string) {
  return string.toUpperCase()
}

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
  var lower = "hello"
  var upper = "HELLO"
  var reg = "I love you, Grandma."
  if (string === lower) {
    return "I can't hear you!"
  }
  else if (string === upper) {
    return "YES INDEED!"
  }
  else if (string === reg) {
    return "I love you, too."
  }
}
