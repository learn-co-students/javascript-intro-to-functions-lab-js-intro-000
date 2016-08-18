//Receives one argument and returns it in all caps
function shout(string){
  return string.toUpperCase ()
}

//Receives one argument and returns it in all lowercase
function whisper(string){
  return string.toLowerCase()
}

//Calls console.log() its one argument in all caps
function logShout(string) {
  console.log(string.toUpperCase(string))
}

//Calls console.log() its one argument in all lowercase
function logWhisper(string) {
  console.log(string.toLowerCase(string))
}

//Returns "I can't hear you!" if `string` is lowercase
function sayHiToGrandma(string) {
  if  (string.toUpperCase ( )  ===  string) {
    return "YES INDEED!"
  } else if  (string.toLowerCase ( )  ===  string) {
    return "I can\'t hear you!"
  } else {
    return "I love you, too."
  }
}
