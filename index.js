
// function 1 - Uppercase
function shout(string) {
  return string.toUpperCase()
}

// function 2 - lowercase
function whisper(string) {
  return string.toLowerCase()
}

// function 3 - log shout
function logShout(string) {
  console.log(string.toUpperCase())
}

// function 4 - log whisper
function logWhisper(string) {
  console.log(string.toLowerCase())
}

// last one Grandma
function sayHiToGrandma(string) {
if (string.toUpperCase() === string) {
  return "YES INDEED!"
}
else if (string.toLowerCase() === string) {
  return "I can't hear you!"
}
else if ("I love you, Grandma." === string) {
  return "I love you, too."
}


}
