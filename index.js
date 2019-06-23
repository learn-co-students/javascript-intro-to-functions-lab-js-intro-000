function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var logShout = 'hello';
  console.log(logShout.toUpperCase());
}

function logWhisper(string) {
  var logWhisper = 'HELLO';
  console.log(logWhisper.toLowerCase());
}

function sayHiToGrandma(string) {
    if(string === string.toLowerCase()) {
      return "I can\'t hear you!"
    } else if(string === string.toUpperCase()) {
      return "YES INDEED!"
    } else {
      return "I love you, too."
    }

}
