function shout(input){
  return input.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();

}

function logShout(string){
  var out = string.toUpperCase();
  console.log(`${out}`);
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var a = string.toLowerCase();
  var b = string.toUpperCase();
  switch (string) {
    case a:
    return "I can't hear you!"
      break;
      case b:
        return "YES INDEED!"
        break;
    default:
    return "I love you, too."

  }
}
