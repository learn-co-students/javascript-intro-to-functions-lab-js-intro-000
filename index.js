function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout("hello"))
}

function logWhisper(string){
  console.log(whisper("HELLO"))
}

function sayHiToGrandma(string){
  var lowerCase = "hello";
  if(lowerCase.toLowerCase === lowerCase){
    return 'I can\'t hear you!';
  }
  var upperCase = "HELLO";
   if(upperCase.toUpperCase === upperCase){
    return 'YES INDEED!';
  }
  else if(string ==="I love you, Grandma."){
    return 'I love you, too.';
  }

}
