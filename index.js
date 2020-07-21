function shout(string) {
  return string.toUpperCase ()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log (string.toUpperCase())
}
function logWhisper(string) {
  console.log (string.toLowerCase())
}
function sayHiToGrandma(string) {
  console.log ("THIS IS THE ARGUMENT.", string)
if (string === string.toUpperCase()) { // if string is uppercase
  return "YES INDEED!" // return "YES INDEED!"

} else if (string === string.toLowerCase()) { // if string is lowercase
  return ("I can't hear you!") // return "I can't hear you!"

} else if (string === "I love you, Grandma.") {// if string equals "I love you, Grandma."
  return "I love you, too." // return "I love you, too."
} }
