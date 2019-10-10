function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(s) {
  console.log( shout(s))
}

function logWhisper(s) {
  console.log( whisper(s))
}

function sayHiToGrandma (input) {
  var upperIn = input.toUpperCase();
  var lowerIn = input.toLowerCase();
  var scream = "YES INDEED!";
  var canthear = "I can\'t hear you!";
  var loveydovey = "I love you, Grandma.";
  var youtoo = "I love you, too.";
  if (input === upperIn) {
    return scream;
  }
  else if (input === lowerIn) {
    return canthear;
  }
  else if (input === loveydovey) {
    return youtoo;
  }
}
