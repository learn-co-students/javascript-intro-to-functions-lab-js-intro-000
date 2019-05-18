function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(
    shout(string)
  )
}

function logWhisper(string) {
  console.log(
    whisper(string)
  )
}

//function FunctionName(String is a name of a something)
// return

function sayHiToGrandma(string) {
  // if uppercase, return "Yes indeed" or If lowercase, return "I can't hear you!"
  if (string === string.toUpperCase()) return "YES INDEED!"
  if (string === string.toLowerCase()) return "I can't hear you!"
  if (string === "I love you, Grandma.") return "I love you, too."
}
