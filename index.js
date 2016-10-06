function shout(string) {
  return string.toUpperCase() // 'HELLO!'
}
function whisper(string) {
  return string.toLowerCase() // 'hello!'
}
function logShout(string) {
  return console.log('HELLO') // 'HELLO!'
}
function logWhisper(string) {
  return console.log('hello') // 'hello!'
}
function sayHiToGrandma(string) {
  switch(string){
  case string.toLowerCase():
    return "I can't hear you!"
    break;
  case string.toUpperCase():
    return "YES INDEED!"
    break;
  case "I love you, Grandma.":
    return "I love you, too."
    break;}
}
