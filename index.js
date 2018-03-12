function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function logShout(input_string) {
 //console.log("hello".toUpperCase())
 console.log(input_string.toUpperCase())
}

// sayHiToGrandma('hi grandma');
function sayHiToGrandma(string) {
  // if(string.toLowercase()) does this exist?
  // if (string === string.toLowerCase()) 'hello grandma' === 'HELLO GRANDMA'
  if (string === whisper(string)){
    return "I can\'t hear you!"
  }
  else if (string === shout(string)) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
