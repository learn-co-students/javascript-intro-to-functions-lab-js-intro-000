function shout(string) {
  return string.toUpperCase()  // The method "toUpperCase()" receives one argument and returns it in all caps
}

function whisper(string) {
  return string.toLowerCase()  // The method "toLowerCase()" receives one argument and returns it in all lowercase
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase())
  return 'I can\'t hear you!'
  else if (string === string.toUpperCase())
  return 'YES INDEED!'
  else (string === "I love you, Grandma.")
  return 'I love you, too.'
}
