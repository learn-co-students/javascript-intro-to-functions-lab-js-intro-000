function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(
    string.toUpperCase()
  )
}

function logWhisper(string) {
  console.log(
    string.toLowerCase()
  )
}

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()){
  return "YES INDEED!"
} else if ("I love you, Grandma." === string) {
  return "I love you, too."
} else {
  return "I can't hear you!"
}
}
