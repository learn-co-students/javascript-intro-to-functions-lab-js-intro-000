var uppercase, lowercase

function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  uppercase= string.toUpperCase();
  string = uppercase;
  console.log(string);
}
function logWhisper(string) {
  lowercase= string.toLowerCase();
  string = lowercase;
  console.log(string);
}
