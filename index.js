function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var a = string.toUpperCase();
  console.log(a);
}



function sayHiToGrandma(string) {
  if (string === string.toLowerCase()){
      return "I can't hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
}


function logWhisper(string) {
  var a = string.toLowerCase();
  console.log(a);
}
