function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
  let reply = null;

  if (str === str.toLowerCase()) {
    reply = 'I can\'t hear you!';
  } else if (str === str.toUpperCase()) {
    reply = 'YES INDEED!';
  } else if (str === 'I love you, Grandma.') {
    reply = 'I love you, too.';
  }

  return reply;
}
