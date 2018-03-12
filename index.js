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
  var lowCase = string.toLowerCase()
  var upCase = string.toUpperCase()
  var loveGrandma = 'I love you, Grandma.'
  if (lowCase === string) {
    return 'I can\'t hear you!'
  } else if (upCase === string) {
    return 'YES INDEED!'
  } else if (loveGrandma === string) {
    return 'I love you, too.'
  }
}