function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var x = string.toUpperCase()
  console.log(x)
}

function logWhisper(string){
  var x = string.toLowerCase()
  console.log(x)
}


function sayHiToGrandma(string){
  if(string.toUpperCase()===string){
  return "YES INDEED!"
}

if(string.toLowerCase()===string){
  return "I can\'t hear you!"
}
else if ("I love you, Grandma."===string){
return "I love you, too."
}
}
