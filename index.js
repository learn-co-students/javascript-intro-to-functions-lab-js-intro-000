var r;
function shout(string){
  r=string.toUpperCase();
  return r;
}
function whisper(string){
  r=string.toLowerCase();
  return r;
}
function logShout(string){
  r=string.toUpperCase();
  console.log(r);
}
function logWhisper(string){
  r=string.toLowerCase();
  console.log(r);
}
function sayHiToGrandma(string){
  if(string.toLowerCase()===string){
    return `I can\'t hear you!`;
  }
  else if(string.toUpperCase()===string){
    return "YES INDEED!";
  }
  else if(string==="I love you, Grandma."){
    return "I love you, too.";
  }
}

