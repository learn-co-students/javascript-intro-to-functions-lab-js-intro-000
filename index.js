function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(str){
  if (str=="I love you, Grandma."){
    return "I love you, too.";
  }else if(str===str.toLowerCase()){
    return "I can't hear you!";
  }else {
    return "YES INDEED!";
  }
}
