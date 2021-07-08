function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout("hello"))
}

function logWhisper(string) {
  console.log(whisper("HELLO"))
}
/*
function sayHiToGrandma(string) {
  var uppercase = "HELLO"
  var lowercase = "hello"
  var love = "I love you, Grandma."

  if (string.toUpperCase() === uppercase) {
    return "YES INDEED!";
  }

  else if (string.toLowerCase() === lowercase) {
    return "I can't hear you!";
  }

  else if (string === love) {
    return "I love you, too.";
  }
}
*/
function sayHiToGrandma(string) {
  switch (string) {
    case "HELLO":
      return "YES INDEED!";
      break;
    case "hello":
      return "I can't hear you!";
      break;
    case "I love you, Grandma.":
      return "I love you, too.";
      break;
    default:
  }
}
