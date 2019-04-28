function shout (string) {
  'Hello!'.toUpperCase()
  return string.toUpperCase()
}
function whisper (string){
  "Hello!".toLowerCase()
  return string.toLowerCase()
}
function logShout (string){
  const spy="hello".toUpperCase()
  console.log(spy)
}
function logWhisper (string){
  const spy="HELLO".toLowerCase()
  console.log(spy)
}

function sayHiToGrandma (string){
  if (string.toLowerCase() === string){
  return "I can't hear you!";
}

 if (string.toUpperCase()===string){
  return "YES INDEED!";
}

 if (string==="I love you, Grandma."){
  return "I love you, too.";
}
}
