function shout(str) {
  return str.toUpperCase();
}

function sayHiToGrandma(str) {
  if (str.toUpperCase() === str) {
    return "YES INDEED!";
  }else if (str.toLowerCase() !== str && str.toUpperCase() !== str) {
    return "I love you, too.";
  }else if (str.toLowerCase() === str) {
    return "I can\'t hear you!";
  }
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}