function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var string = string.toUpperCase();
  console.log(string);
}

function logWhisper(string) {
  var string = string.toLowerCase();
  console.log(string);
}

function sayHiToGrandma(string) {
  var string1 = string.toLowerCase();
  var string2 = string.toUpperCase();
  var string3 = "I love you, Grandma.";
  if (string===string1){
  return "I can't hear you!";
  }else if (string===string2){
  return "YES INDEED!";
}else if (string === string3){
  return "I love you, too." ;
}
}
