function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO')
}
function logWhisper(string) {
  console.log('hello')
}
function sayHiToGrandma(string) {
  var lowercase = 'hello'
  var uppercase = 'HELLO'
  var mixedCase = 'I love you, Grandma.';
  switch (true) { case string === lowercase:
  return "I can\'t hear you!";
  break;
  case string === uppercase:
  return "YES INDEED!";
  break;
  case string === mixedCase:
  return "I love you, too."
} }
