function shout(argument){
  return `${argument}`.toUpperCase()
}

function whisper(e){
  return `${e}`.toLowerCase()
}

function logShout(e){
  console.log(`${e}`.toUpperCase())
}


function logWhisper(e) {
console.log(`${e}`.toLowerCase())
}

function sayHiToGrandma(e) {
  //console.log(e);
  if(e === e.toUpperCase()){
  return("YES INDEED!")
}else if (e === e.toLowerCase()) {
  return("I can't hear you!")
}else if(e === "I love you, Grandma."){
  return("I love you, too.")
}
}
