const shout = string => string.toUpperCase()

const whisper = string => string.toLowerCase()

const logShout = string => console.log(shout(string))

const logWhisper = string => console.log(whisper(string))

const sayHiToGrandma = str => {
  if (str.toUpperCase() === str) return "YES INDEED!"
  else if (str.toLowerCase() === str) return "I can't hear you!"
  else if (str === "I love you, Grandma.") return "I love you, too."
}
