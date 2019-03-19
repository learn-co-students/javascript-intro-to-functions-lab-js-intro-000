function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

function logShout(str){
  console.log(str.toUpperCase());
}

function logWhisper(str){
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  var uppercase = "HELLO";
  var lowercase = "hello";
  var check = "I love you, Grandma";
  if(str === uppercase){
    return "YES INDEED!";
  }
  else if (str === lowercase) {
    return "I can't hear you!";
  }
  else {
    return "I love you, too.";
  }
}

shout("hello");
whisper("HELLO");
logShout("hello");
logWhisper("HELLO");
sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma");
