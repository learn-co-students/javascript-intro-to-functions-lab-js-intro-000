function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiGrandma(string){
  var uppercase = 'HELLO';
  var lowercase = 'hello';
  var mixCase = 'I love you, too.' ;
  if (string.toUpperCase() === uppercase){
    return "I can't hear you!"
  }else if (string.toLowerCase() === lowercase){
    return "YES INDEED!"
  }else(string === "I love you, Grandma."){
    return mixCase
  }
}
