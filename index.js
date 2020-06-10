function shout(word){
  return word.toUpperCase()
}
function whisper(word){
  return word.toLowerCase()
}
function logShout(word){
  console.log(shout(word))
}
function logWhisper(word){
  console.log(whisper(word))
}
function sayHiToGrandma(word){
  if (word===word.toLowerCase()){
    return "I can't hear you!";
  } else if (word===word.toUpperCase()){
    return "YES INDEED!"
  } else if (word==="I love you, Grandma."){
    return "I love you, too."
  }
}