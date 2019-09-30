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
  var tooQuiet = "I can't hear you!"
  var yes = "YES INDEED!"
  var youToo = "I love you, too."

  if (string.toLowerCase(string) === string) {
    return tooQuiet
  }

  else if (string.toUpperCase(string) === string) {
    return yes
  }

  else if ("I love you, Grandma." === string) {
    return youToo
  }

}
