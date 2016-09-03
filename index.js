function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase);
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase);
  console.log('hello');
}

function sayHiToGrandma(string) {
  if (string===string.toLowerCase()) {
    return "I can\'t hear you!";
  } else if (string===string.toUpperCase()) {
    return "YES INDEED!";
  } else if ("I love you, Grandma.") {
    return "I love you, too.";
  }
}
/*function sayHiToGrandma(string) {
  switch (string) {
    case (string.toLowerCase()):
    return "I can\'t hear you!";
    break;
    case (string.toUpperCase()):
    return "YES INDEED!";
    break;
    case ("I love you, Grandma."):
    return "I love you, too.";
    break;
  }
}
*/
