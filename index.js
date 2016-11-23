function shout(mystring){
  return mystring.toUpperCase()
}

function whisper(mystring){
  return mystring.toLowerCase()
}

function logShout(mystring){
  console.log(mystring.toUpperCase())
}

function logWhisper(mystring){
  console.log(mystring.toLowerCase())
}

function sayHiToGrandma(mystring){
  if(mystring === mystring.toLowerCase()){
    return "I can't hear you!"
  } else if(mystring === mystring.toUpperCase()){
    return "YES INDEED!"
  } else if (mystring === "I love you, Grandma."){
    return "I love you, too."
  }
}
