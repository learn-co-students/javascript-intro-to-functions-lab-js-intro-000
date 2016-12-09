function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('hello'.toUpperCase())
}
function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
}
function sayHiToGrandma(string) {
  var string1 = "hello"
  var string2 = "HELLO"
  var string3 = "I love you, Grandma."
  if (string1.toLowerCase() === string) {
    return"I can\'t hear you!"
  }
  else if (string2.toUpperCase() === string) {
  return"YES INDEED!"
  }
  else if (string3 === string){
  return"I love you, too."
  }
}
