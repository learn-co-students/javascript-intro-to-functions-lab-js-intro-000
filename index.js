function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var uppercase = string.toUpperCase()
  console.log(uppercase)
}

function logWhisper(string){
  var lowercase = string.toLowerCase()
  console.log(lowercase)
}

function sayHiToGrandma(string){
  if (string == string.toLowerCase()){
    return "I can't hear you!"
  }

  else if (string == string.toUpperCase()) {
    return "YES INDEED!"
  }

  else if (string = "I love, Grandma.") {
    return "I love you, too."
  }
}
