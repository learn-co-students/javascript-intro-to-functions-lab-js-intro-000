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
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){

  var strComp = string
  console.log("Inside sayHiToGrandma")
  if(strComp.toLowerCase() === strComp){
    return "I can't hear you!"
    console.log("Inside toLowerCase")
  }

  else if (strComp.toUpperCase() === strComp) {
      return "YES INDEED!"
      console.log("Inside toUpperCase")
  }

  else if (string === "I love you, Grandma.") {
    return "I love you, too."
      console.log("Inside I love you")
  }

  else {
    return "Are you eating enough?"
  }

}
