function shout(arg) {
  return arg.toUpperCase();
}

function whisper(arg) {
  return arg.toLowerCase();
}

function logShout(arg) {
  return console.log(arg.toUpperCase());
}

function logWhisper(arg) {
  return console.log(arg.toLowerCase());
}

function sayHiToGrandma(arg) {
  if (arg && arg.toLowerCase() === arg) {
    return "I can't hear you!";
  }
  if (arg && arg.toUpperCase() === arg) {
    return "YES INDEED!";
  }
  if (arg && "I love you, Grandma." === arg) {
    return "I love you, too.";
  }

}
