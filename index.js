function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var answer = "";
  switch (string) {
    case string.toLowerCase() : answer = "I can't hear you!";
    break;
    case string.toUpperCase() : answer = "YES INDEED!";
    break;
    case "I love you, Grandma." : answer = "I love you, too.";
    break;
  }
  return answer;
}
