function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  return console.log(string.toUpperCase());
}
function logWhisper(string){
  return console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
  if  (string.toLowerCase() === string){
  return ("I can't hear you!");
}
if (string.toUpperCase()){
  return ("YES INDEED!");
}
if (string.includes("I love you, Grandma") === true){
  return ("I love you, too");
}
}
