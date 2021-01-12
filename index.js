function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string .toUpperCase())
}
function logWhisper(string){
  console.log(string .toLowerCase())
}
function sayHiToGrandma(string){
  var firstanswer  = "I can't hear you!"
  var secondanswer = "YES INDEED!"
  var thirdanswer  = "I love you, too."

  if (string.toLowerCase(string) === string){
    return firstanswer
  }
  else if (string.toUpperCase(string) === string){
    return secondanswer
  }
  else if (string === "I love you, Grandma."){
    return thirdanswer
  }
}
