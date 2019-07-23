function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  var spy = string.toUpperCase();
  console.log(spy)
}

function logWhisper(string) {
  var spy = string.toLowerCase();
  console.log(spy)
}

function sayHiToGrandma(string) {
  switch(string) {
  case string.toLowerCase():
    return "I can't hear you!";
  case string.toUpperCase():
    return "YES INDEED!";
  case "I love you, Grandma.":
    return "I love you, too.";}
}
