function shout(phrase) {
  return phrase.toUpperCase();
}

function whisper(phrase) {
  return phrase.toLowerCase();
}

function logShout(phrase) {
  console.log(shout(phrase));
}

function logWhisper(phrase) {
  console.log(whisper(phrase));
}

function sayHiToGrandma(phrase) {
  if (phrase === 'I love you, Grandma.') {
    return 'I love you, too.';
  }

  if (phrase === whisper(phrase)) {
    return 'I can\'t hear you!';
  } else if (phrase === shout(phrase)) {
    return 'YES INDEED!';
  }
}