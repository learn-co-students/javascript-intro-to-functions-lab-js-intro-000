function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}
    //1) receives one argument and returns it in all lowercase

function logShout(string){
  console.log(string.toUpperCase())
}
    //2) calls console.log() its one argument in all caps

function logWhisper(string){
  console.log(string.toLowerCase())
}
    //3) calls console.log() its one argument in all lowercase

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else if (string === string.toUpperCase()){
    return "YES INDEED!"
  } else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
    // 4) returns "I can't hear you!" if `string` is lowercase
    // 5) returns "YES INDEED!" if `string` is uppercase
    // 6) returns "I love you, too." if `string` is "I love you, Grandma."`
