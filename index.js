function shout(string) {
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
  var lcase = "I love you, Grandma."
  var lowercase = string.toLowerCase()
  var uppercas = string.toUpperCase()
  if  (lcase === string){
    return "I love you, too."
  }
  else if ( lowercase === string ) {
    return "I can\'t hear you!"
  }
  else if (uppercas === string) {
    return "YES INDEED!"
  }
}