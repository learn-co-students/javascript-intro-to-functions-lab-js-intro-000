function shout(string) {
  //Recieves one argument and returns it in all caps
  return string.toUpperCase()
}

function whisper(string) {
  //receives one argument and returns it in all lower case
  return string.toLowerCase()
}

function logShout(string) {
  //calls console.log it's one argument in all caps
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  //calls console.log on it's one argument in all lower case
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  //returns 'I can't hear you!' if string in lower case
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}
