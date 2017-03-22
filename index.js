var uppercase = "HELLO"
var lowercase = "hello!"
var ilu = "I love you, Grandma."

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  uppercase = string.toUpperCase()
  console.log(uppercase)
}

function logWhisper(string){
  lowercase = string.toLowerCase()
  console.log(lowercase)
}

function sayHiToGrandma(string){
    if (string.toUpperCase() === uppercase){
    return("YES INDEED!")
}
  else if (string.toLowerCase() === lowercase){
    return("I can't hear you!")
  }

  else if (string === ilu) {
    return("I love you, too.")
  }


}
