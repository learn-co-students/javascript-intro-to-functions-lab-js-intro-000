function shout(string){

  return string.toUpperCase();

}

function whisper(string){

return string.toLowerCase();

}

function logShout(string){
  var UpperCaseStr = shout(string);
  console.log(UpperCaseStr)
}

function logWhisper(string){
  var LowerCaseStr = whisper(string);
  console.log(LowerCaseStr)
}


function sayHiToGrandma(string){
    if (string.toLowerCase() === string){

  return "I can\'t hear you!"

} else if (string.toUpperCase() === string){

  return "YES INDEED!"

} else if (string === "I love you, Grandma."){

  return "I love you, too."
}

}
