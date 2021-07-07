function shout (string){
  return string.toUpperCase();
}

function whisper (HELLO){
  return HELLO.toLowerCase();
}

function logShout(string){
console.log (string.toUpperCase());
}

function logWhisper(HELLO){
console.log("HELLO".toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  }

  if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
