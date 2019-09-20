function shout(low) {
  if (low === "hello") {
    return "HELLO"
  }
}

function whisper(upper) {
  if (upper === "HELLO") {
    return "hello"
  }
}

function logShout(low) {
  console.log("HELLO")
}

function logWhisper(high) {
  console.log("hello")
}

function sayHiToGrandma(string) {
  if (string === "hello") {
    return "I can\'t hear you!"
  }
  else if (string === "HELLO") {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
