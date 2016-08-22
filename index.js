function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
  return
}
function logWhisper(string){
  console.log(string.toLowerCase())
  return
}
function sayHiToGrandma(string){
  var temp = string
  var love = "I love you, Grandma"

  if (temp === string.toLowerCase()){
    return "I can't hear you!"
  }
  else if (temp === string.toUpperCase()) {
      return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }




}
