function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  var response;
  if (whisper(string) === string)
    response = "I can't hear you!";
  else if (shout(string) === string)
    response = "YES INDEED!";
  else if (string === "I love you, Grandma.")
    response = "I love you, too."
  return response;
}
