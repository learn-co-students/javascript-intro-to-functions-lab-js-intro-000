var uppercase, lowercase

function shout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}
function whisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
}
function logShout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  console.log (uppercase);
}
function logWhisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  console.log (lowercase);
} //passed to here
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    var lowercase = 'I can\'t hear you!';
    return (lowercase);
  }
  else if (string === string.toUpperCase()) {
    var uppercase = 'YES INDEED!';
    return (uppercase);
    }
  else if (string === 'I love you, Grandma.') {
        var mixedCase = 'I love you, too.';
        return (mixedCase);
    }
}
