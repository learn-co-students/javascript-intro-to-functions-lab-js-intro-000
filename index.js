function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function logShout(string) {
  console.log(string.toUpperCase())
}
var lowercase ='hello'
var uppercase = 'HELLO'
var smile = "I love you, Grandma."
function sayHiToGrandma(string) {
if (string === uppercase) {
  return "YES INDEED!"
}
else if(string === lowercase) {
  return "I can't hear you!"
}
else if(string === smile) {
  return "I love you, too."
}
}
