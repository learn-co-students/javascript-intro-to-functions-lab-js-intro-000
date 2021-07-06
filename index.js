function shout(string) {
  return string.toUpperCase() // 'HELLO!'
}

function  whisper(string){
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

//Slightly more complicated with inclusion of if statements



var string = 'I love you, Grandma.'

function sayHiToGrandma(string){
  if (string.toLowerCase() === string) {
    return 'I can\'t hear you!'
  }
  else if (string.toUpperCase() === string) {
    return 'YES INDEED!'
  }
  else {
    return 'I love you, too.'
  }
}
