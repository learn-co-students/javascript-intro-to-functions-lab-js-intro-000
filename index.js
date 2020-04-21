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
  var lowercase = string.toLowerCase() === string
  var uppercase = string.toUpperCase() === string
  var love = "I love you, Grandma." === string
  if (lowercase) {
    return "I can't hear you!"
  }
  else if (uppercase) {
    return "YES INDEED!"
  }
  else if (love) {
    return "I love you, too."
  }
}
