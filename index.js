function shout(yell) {
  return yell.toUpperCase()
}

function whisper(quiet) {
  return quiet.toLowerCase()
}

function logShout(yell) {
  console.log(yell.toUpperCase())
}

function logWhisper(quiet) {
  console.log(quiet.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }
  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
