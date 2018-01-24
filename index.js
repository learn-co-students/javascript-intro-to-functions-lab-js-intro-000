function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var shout = string.toUpperCase()
  console.log(shout)
}

function logWhisper(string) {
  var whisper = string.toLowerCase()
  console.log(whisper)
}

function sayHiToGrandma(string) {
  var shout = string.toUpperCase()
  var whisper = string.toLowerCase()

  if (string === shout){
    return "YES INDEED!"
  } else if (string === whisper){
    return "I can't hear you!"
  } else if (string === "I love you, Grandma." ){
    return "I love you, too."
  }
}
