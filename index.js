function shout(inStr ){
  return inStr.toUpperCase();

}

function whisper(inStr) {
  return inStr.toLowerCase();
}

function logShout(inStr) {
  console.log(shout(inStr));
}

function logWhisper(inStr) {
  console.log(whisper(inStr));
}

function sayHiToGrandma(inStr) {
   if ( inStr === inStr.toLowerCase() ) { return ("I can\'t hear you!");}
   else if (inStr === inStr.toUpperCase()) { return ("YES INDEED!");}
   else if (inStr === "I love you, Grandma.") {return ("I love you, too.");}
}
