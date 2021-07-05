function shout(strInput){
  return strInput.toUpperCase();
}

function whisper(strInput){
  return strInput.toLowerCase();
}

function logShout(strInput) {
  console.log(strInput.toUpperCase() )
}


function logWhisper(strInput) {
  console.log(strInput.toLowerCase() )
}

function sayHiToGrandma(strInput){
  if(strInput === strInput.toLowerCase() ){
    return "I can't hear you!"
  } else if (strInput === strInput.toUpperCase() ) {
    return "YES INDEED!"
  }  else if (strInput === "I love you, Grandma.") {
    return "I love you, too."
  }
}
