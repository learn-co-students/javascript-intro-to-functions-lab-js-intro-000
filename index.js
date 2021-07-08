function shout (string) {
  return string.toUpperCase( );
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string){
  return console.log(string.toUpperCase())
}

 logShout("hello")
 
 function logWhisper(string){
  return console.log(string.toLowerCase())
}

 logWhisper("HELLO")
 
 

function sayHiToGrandma (string) {
  var deaf = "I can't hear you!";
  var respond = "YES INDEED!";
  var love = "I love you, too.";
  if (string.toLowerCase(string) === string) {
    return deaf;
  }
  else if (string.toUpperCase(string) === string) {
    return respond;
  }
  else if ("I love you, Grandma." === string) {
    return love
  }
}