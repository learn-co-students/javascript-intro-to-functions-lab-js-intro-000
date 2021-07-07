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

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    console.log("1", string);
    return "I love you, too."
  }
  else if (string === 'hello') {
    console.log("2", string);
    return "I can\'t hear you!";
  }
  else if (string === 'HELLO') //{
    //console.log("3", string);
    return "YES INDEED!";
  //}
  //else 
    //return "pants";
  }