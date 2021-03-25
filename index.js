// Returns string in all uppercase
function shout(string){
  return string.toUpperCase()
}

// returns string in all lowercase
function whisper(string){
  return string.toLowerCase()
}

//takes a string argument and logs it in all caps using console.log()
function logShout(string){
  console.log(`${string.toUpperCase()}`)
}

//takes a string argument and logs it in all lowercase using console.log()
function logWhisper(string){
  console.log(`${string.toLowerCase()}`)
}

/* returns "I can't hear you!" if `string` is lowercase
returns "YES INDEED!" if `string` is uppercase
returns "I love you, too." if `string` is "I love you, Grandma" */
function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
  if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
