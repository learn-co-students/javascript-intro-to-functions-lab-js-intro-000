function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var shoutString = string.toUpperCase();
  console.log(shoutString);
}

function logWhisper(string) {
  var whisperString = string.toLowerCase();
  console.log(whisperString);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  }
  var check = 'I love you, Grandma.'
  if (string === check) {
    return 'I love you, too.'
  }
}
