function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(shout(string));
}
function logWhisper(string){
  console.log(whisper(string));
}
function sayHiToGrandma(string){
  var upper = string.toUpperCase();
  var lower = string.toLowerCase();
if(upper === string){
  return "YES INDEED!";
}
else if(lower === string){
  return "I can't hear you!";
}
else if("I love you, Grandma." === string){
  return "I love you, too.";
}

}
