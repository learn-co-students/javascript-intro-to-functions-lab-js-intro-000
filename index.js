function shout(string){
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var sayHiString = "";
  if (string === (whisper(string))) {
    sayHiString = "I can't hear you!";

  } else if (string === (shout(string))) {
    sayHiString = "YES INDEED!";
  } else if (string === "I love you, Grandma."){
    sayHiString = "I love you, too."
  } else {
    sayHiString = "";
  }
  return sayHiString;
}
