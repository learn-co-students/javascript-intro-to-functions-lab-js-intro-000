function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(hello) {
  console.log(hello.toUpperCase());
}

function logWhisper(HELLO) {
  console.log(HELLO.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === 'hello')
   return "I can't hear you!"
      else if (string === 'HELLO')
    return "YES INDEED!"
     else (string === "I love you, Grandma.")
     return "I love you, too."
}
