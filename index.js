function shout(string) {
  return string.toUpperCase()
}
shout("Mike")

let whisper = (string) => {
  return string.toLowerCase()
}

whisper

let logShout = (string) => {
  console.log(string.toUpperCase())
}

logShout

let logWhisper = (string) => {
  console.log(string.toLowerCase())
}

logWhisper

let sayHiToGrandma = (string) => {
  if (string === string.toLowerCase()) {
      return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
      return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
      return "I love you, too."
  }
}

sayHiToGrandma