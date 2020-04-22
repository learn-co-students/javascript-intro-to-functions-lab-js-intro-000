function shout(string){
  return string.toUpperCase();
}
shout("life is what you make it");

function whisper(string){
  return string.toLowerCase();
}
whisper("I will become a great and skillful programmer")

function logShout (string){
   console.log(string.toUpperCase());
}
logShout("I tested this in the firefox console and it passed so what is the problem here");

function logWhisper(string){
  console.log(string.toLowerCase());
}
logWhisper("I think I just spotted my error I didnt do the camelCase")

function sayHiToGrandma(string){
  if(string===string.toLowerCase()){
    return ("I can't hear you!");
  }else if(string===string.toUpperCase()){
    return ("YES INDEED!");
  }else if(string==="I love you, Grandma."){
    return ("I love you, too.");
  }
}
sayHiToGrandma("hello");
