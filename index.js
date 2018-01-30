function shout(string){
  `hello!`.toUpperCase()
  return string.toUpperCase()
}
function whisper(string){
  `HELLO`.toLowerCase()
  return string.toLowerCase()
}
function logShout(string){

  console.log(`hello`.toUpperCase());
}
function logWhisper(string){
  console.log(`HELLO`.toLowerCase());
}
function sayHiToGrandma(string){
  var uppercase = "HELLO"
  var lowercase = "hello"
  if (string===string.toLowerCase()){
    return "I can't hear you!"
  }
  else if (string===string.toUpperCase()){
    return "YES INDEED!"
  }
  else if (string==="I love you, Grandma."){
    return "I love you, too."
  }


}
