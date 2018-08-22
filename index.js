function shout(Hello) {
  return 'Hello'.toUpperCase()
}

function whisper(Hello) {
  return 'Hello'.toLowerCase()
}

function logShout(Hello) {
  return console.log('Hello'.toUpperCase())
}

function logWhisper(Hello) {
  return console.log('Hello'.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";
}