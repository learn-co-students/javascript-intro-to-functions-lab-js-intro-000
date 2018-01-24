function shout(string) {
  return string.toUpperCase() //why this syntax? method- functions stored as object properties
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(`${string.toUpperCase()}`)
}

function logWhisper(string) {
  console.log(`${string.toLowerCase()}`)
}

function sayHiToGrandma(string) {
    if (string.toUpperCase() === string){//using case specific var=HELLO/hello/I love you, referring to string itself saves space and doesnt limit string value
      return "YES INDEED!"
    }

    if (string.toLowerCase() === string) {
      return "I can\'t hear you!"
    }

    if (string === "I love you, Grandma.") {
      return "I love you, too."
    }

}
