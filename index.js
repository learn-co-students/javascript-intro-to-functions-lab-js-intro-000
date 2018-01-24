function shout(word) {
  return word.toUpperCase();
}

function whisper(word) {
  return word.toLowerCase();
}

function logWhisper(word) {
  console.log(word.toLowerCase());
}

function logShout(word) {
  console.log(word.toUpperCase());
}

function sayHiToGrandma(word) {
  var anotherString = "I love you, Grandma.";
  if (word === word.toLowerCase()) {
    return "I can't hear you!";
  }
  else if (word === word.toUpperCase()) {
    return "YES INDEED!";
  }
  else if(word === anotherString) {
    return "I love you, too.";
  }
}