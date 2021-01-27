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
var value = "";

if (string === whisper(string)) {
  value = "I can't hear you!"
} else if (string === shout(string)) {
  value = "YES INDEED!"
} else if (string === "I love you, Grandma.") {
  value = "I love you, too."
}

return value;
}
