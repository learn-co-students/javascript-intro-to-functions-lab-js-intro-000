function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {

  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

/////////////////
//I misunderstood that lowercase is not the same as toLowerCase etc and that the if statement required a test that it's a string.
//////////////////

// this required a bit of help learning the argument to evaluate (string.toLowerCase() === string) to establish it is a string,
//and then also that lowercase is not sufficient as it has to be toLowerCase whereas I thought the input would already be
//lowercase and that toLowerCase meant to convert it to lowercase - actually I still don't understand this entirely
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }

  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  else if (string = "I love you, Grandma.") {
    return "I love you, too."
  }
}
