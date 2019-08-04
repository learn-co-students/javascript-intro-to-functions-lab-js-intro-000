const shout = (str) => {
  return str.toUpperCase()
}

const whisper = (str) => {
  return str.toLowerCase()
}

const logShout = (str) => {
  console.log(str.toUpperCase())
}

const logWhisper = (str) => {
  console.log(str.toLowerCase())
}

const sayHiToGrandma = (str) => {
  if (str === str.toUpperCase()) {
    return "YES INDEED!"
  } else if (str === str.toLowerCase()) {
    return "I can't hear you!"
  } else {
    return "I love you, too."
  }
}
