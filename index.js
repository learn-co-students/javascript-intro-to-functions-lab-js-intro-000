function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(hello) {
  console.log (hello.toUpperCase())
}
function logWhisper(hello) {
  console.log (hello.toLowerCase())
}
function sayHiToGrandma(hello) {
  var cantHello = "I can't hear you!"
  var yesHello = "YES INDEED!"
  var lovHello = "I love you, too."
  if (hello.toLowerCase(hello) === hello) {
    return cantHello
  }
  else if (hello.toUpperCase(hello) === hello) {
    return yesHello
  }
  else if ("I love you, Grandma." === hello) {
    return lovHello
  }
}
