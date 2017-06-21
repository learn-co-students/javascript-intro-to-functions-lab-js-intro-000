function shout(words) {
  return words.toUpperCase()
}

function whisper(words) {
  return words.toLowerCase()
}

function logShout(words) {
  console.log(words.toUpperCase())
}

function logWhisper(words) {
  console.log(words.toLowerCase())
}

function sayHiToGrandma(words) {
  var realwords = words
  if(words.toLowerCase() === realwords) return "I can't hear you!"
  else if(words.toUpperCase() === realwords) return "YES INDEED!"
  else if(words === "I love you, Grandma.") return "I love you, too."
}
