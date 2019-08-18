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

function sayHiToGrandma(string) {
  var value
  value =  `hello`
  var second_value
  second_value = `HELLO`
  if (string === value) {
    return `I can't hear you!`
  }
  else if (string === second_value) {
    return `YES INDEED!`
  }
  else if (string === `I love you, Grandma.`) {
    return `I love you, too.`
  }
}
