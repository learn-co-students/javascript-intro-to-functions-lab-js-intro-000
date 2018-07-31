function shout(param1) {
  return param1.toUpperCase();
}


function whisper(param1) {
  return param1.toLowerCase();
}

function logShout(param1) {
  console.log(param1.toUpperCase());
}

function logWhisper(param1) {
  console.log(param1.toLowerCase());
}



function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
      return "I can't hear you!"
    }else if (string === string.toUpperCase()){
      return "YES INDEED!"
    }else if (string === "I love you, Grandma."){
      return "I love you, too."
    }
}
