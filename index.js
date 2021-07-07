function shout(msg) {
  return msg.toUpperCase();
}

function whisper(msg) {
  return msg.toLowerCase();
}

function logShout(msg) {
  console.log(msg.toUpperCase());
}

function logWhisper(msg) {
  console.log(msg.toLowerCase());
}

function sayHiToGrandma(msg) {
  if (msg === msg.toLowerCase()) return "I can't hear you!";
  if (msg === msg.toUpperCase()) return "YES INDEED!";
  if (msg === "I love you, Grandma.") return "I love you, too.";
}
