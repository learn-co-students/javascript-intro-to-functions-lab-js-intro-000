function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

/*
function sayHiToGrandma(string) {
  if (string = "I love you, Grandma.") {
    return "I love you, too!"
  } else if (string = string.toLowerCase) {
    return "I can\'t hear you!"
  } else if (string = string.toUpperCase) {
    return "YES INDEED!"


  }

}
*/
function sayHiToGrandma(string){
  switch (string) {
      case string = string.toLowerCase ():
        return "I can\'t hear you!";
        break;
      case string = string.toUpperCase():
        return "YES INDEED!";
        break;
      case string = "I love you, Grandma.":
        return "I love you, too.";
        break;

}
}
