// shout(string) receives one argument and returns it in all caps
function shout(string) {
  return string.toUpperCase();
}
// whisper(string) receives one argument and returns it in all lowercase
function whisper(string) {
  return string.toLowerCase();
}
// logShout(string) calls console.log() its one argument in all caps
function logShout(string) {
  console.log(string.toUpperCase());
}
// logWhisper(string) calls console.log() its one argument in all lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}
// sayHiToGrandma(string)
function sayHiToGrandma(string) {
  // sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase
  if(string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  // sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase
  if(string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  // sayHiToGrandma(string) returns "I love you, too." if `string` is "I love you, Grandma."
  if(string === 'I love you, Grandma.') {
    return "I love you, too.";
  }
}
