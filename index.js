function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  return string.toUpperCase();
}
console.log(logShout('hello'));

function logWhisper(string) {
  return string.toLowerCase();
}
console.log(logWhisper("HELLO"));

var sayHiToGrandma;
function sayHiToGrandma(string) {
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === "I love you, Grandma.") {
        return "I love you, too.";
    }
}
sayHiToGrandma('I love you, Grandma!');
// var sayHiToGandma;
// console.log(sayHiToGandma('I love you, Grandma!'));
