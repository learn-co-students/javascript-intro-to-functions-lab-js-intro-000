function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lowercase = string
  var uppercase = string
  var mixedCase = string
  if(lowercase.toLowerCase() === lowercase){
    return "I can't hear you!"
  }
  if(uppercase.toUpperCase() === uppercase){
    return "YES INDEED!"
  }
  if(mixedCase.toLowerCase() != mixedCase){
    if(mixedCase.toUpperCase() != mixedCase){
      return "I love you, too."
    }
  }
}
