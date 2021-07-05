function shout(string){         //function returns strings in UPPERCASE

  return string.toUpperCase()
}

function whisper(string){       //function returns strings in lowercase
  return string.toLowerCase()
}


function logShout(string){      //logs the string in UPPERCASE
  console.log(string.toUpperCase())
}

function logWhisper(string){    //logs the string in lowercase
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){  //make sure grandma can hear us by checking cAsE
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }

  else if (string ===string.toUpperCase()){
    return "YES INDEED!"
  }

  else if (string === "I love you, Grandma.")
    return "I love you, too."
}
