function shout(something) {
  return something.toUpperCase();
}

function whisper(something) {
  return something.toLowerCase();
}

function logShout(something) {
  console.log(something.toUpperCase());
}

function logWhisper(something) {
  console.log(something.toLowerCase());
}

function sayHiToGrandma(say) {
  if (say.toLowerCase() === say) {
    return 'I can\'t hear you!';
  } else if (say.toUpperCase() === say) {
    return "YES INDEED!";
  } else if (say === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
