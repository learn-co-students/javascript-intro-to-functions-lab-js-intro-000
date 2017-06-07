function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(stringlea){
  console.log('HELLO') + "spy";
}

function logWhisper(string){
  console.log('hello') + "spy";
}

function sayHiToGrandma(string){

  var storage1 = "hello";
  var storage2 = "HELLO";
  var storage3 = "I love you, Grandma.";

  if(string === storage1){
    return "I can't hear you!";
  }
  else if(string === storage2){
    return("YES INDEED!");
  }
  else if(string === storage3){
    return "I love you, too.";
  }
}
