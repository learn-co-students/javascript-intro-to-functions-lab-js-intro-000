function shout(string){
  return string.toUpperCase();
}

function logShout(string){
  console.log(shout(string));
}

function whisper(string){
    return string.toLowerCase();
}

function logWhisper(string){
  console.log(whisper(string));
}

function sayHiToGrandma(string){
  var text = string
  var aux = "I love you, Grandma."
  var answer = "I love you, too."

  if (text.toLowerCase() === text) {
    return "I can't hear you!";
  }

  if(text.toUpperCase() === text){
    return "YES INDEED!";
  }

  if(aux == text){
    return answer;
  }
}
