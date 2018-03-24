function shout(string) {
  return string.toUpperCase()
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
function sayHiToGrandma(string){
  let str  = string.toLowerCase()
  if(string === str){
    return  "I can\'t hear you!"
  }
  if(string === "I love you, Grandma."){
    return "I love you, too."
  }
  return "YES INDEED!"
}
 
