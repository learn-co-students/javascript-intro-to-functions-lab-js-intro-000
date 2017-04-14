function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  //do I need a return here?  hm...
}

function logWhisper(string) {
  console.log(string.toLowerCase())
  //same here, it'll return undefined otherwise, right?
}

function sayHiToGrandma(string) {  
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  if (string !== string.toUpperCase()) {
    return "I can't hear you!"
  }  else  {
    return "YES INDEED!"
  }
}