function shout(string) {
  return string.toUpperCase()
}


function whisper(string) {
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

function sayHiToGrandma(string) {
    switch(string){
      case string.toLowerCase():
        return "I can\'t hear you!"
        break;
      case string.toUpperCase():
        return 'YES INDEED!'
        break;
      case "I love you, Grandma.":
        return 'I love you, too.'
      }
  }
