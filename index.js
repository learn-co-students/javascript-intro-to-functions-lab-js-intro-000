function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(grandmaText) {
  if (grandmaText.toLowerCase() === grandmaText) {
    return "I can't hear you!"
  }

  if (grandmaText.toUpperCase() === grandmaText) {
    return "YES INDEED!"
  }

  if (grandmaText === "I love you, Grandma.") {
    return "I love you, too."
  }
}