function shout (string) {
  return string.toUpperCase()
}

shout('Hello')

function whisper (string) {
  return string.toLowerCase()
}

whisper('HELLO')

function logShout(string) {
  console.log(string.toUpperCase())
}

logShout('hello')

function logWhisper(string) {
  console.log(string.toLowerCase())
}

logWhisper('HELLO')

function sayHiToGrandma(string) {
var lowercase = 'hello'
var uppercase = 'HELLO'
  if(string === lowercase.toLowerCase()) {
    return "I can\'t hear you!"
  }

  else if (string === uppercase.toUpperCase()) {
    return "YES INDEED!"
  }

  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}


sayHiToGrandma('HELLO')
sayHiToGrandma('hello')
sayHiToGrandma("I love you, Grandma.")
