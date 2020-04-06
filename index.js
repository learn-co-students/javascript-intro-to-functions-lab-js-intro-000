function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var answer = string.toUpperCase()
  console.log(answer)
}

function logWhisper(string) {
  var answerr = string.toLowerCase()
  console.log(answerr)
}

function sayHiToGrandma(string) {

 if (string.toUpperCase() === string) {
   return `YES INDEED!`;
 } else if (string.toLowerCase()=== string) {
   return `I can't hear you!`;
 } else if (string = "I love you, Grandma") {
   return `I love you, too.`;
 } else {
   return `WHAT`;
 }
}
