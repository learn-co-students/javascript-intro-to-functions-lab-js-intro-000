function shout(word) {
  return (word.toUpperCase());
}

function whisper(word) {
  return(word.toLowerCase());
}

function logShout(word) {
  console.log(word.toUpperCase());
}


function logWhisper(word) {
  console.log(word.toLowerCase());
}

function sayHiToGrandma(sentence) {
  if (sentence === sentence.toLowerCase()) {
    return("I can\'t hear you!");
  } else if (sentence === sentence.toUpperCase()) {
    return("YES INDEED!");
  } else if (sentence === "I love you, Grandma.") {
    return("I love you, too.")
  }
}
