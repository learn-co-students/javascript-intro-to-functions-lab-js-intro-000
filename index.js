function shout(s) {
  return s.toUpperCase();
};

function whisper(s) {
  return s.toLowerCase();
}

function logShout(s) {
  console.log(s.toUpperCase());
}

function logWhisper(s) {
  console.log(s.toLowerCase());
}

function sayHiToGrandma(s) {
  if (s === s.toLowerCase()) {
    return "I can't hear you!";
  } else if (s === s.toUpperCase()) {
    return "YES INDEED!";
  }

  if (s === "I love you, Grandma.")
    return "I love you, too.";
}
