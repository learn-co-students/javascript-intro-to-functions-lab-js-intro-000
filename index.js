function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
return string.toLowerCase();
}
function logShout(string) {
console.log (string.toUpperCase());
}
function logWhisper(string) {
console.log (string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
}

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
}

  if (string === "I love you, Grandma.") {
    return "I love you, too."
}
}

/*
function sayHiToGrandma(string) {
  if ("string.toUpperCase === uppercase")
  return ("YES INDEED!");
}
function sayHiToGrandma(string) {
  if ("string === I love you, Grandma.")
  return ("I love you, too.");
}

/*
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
Note that just like .toUpperCase() changes any string to all uppercase in JavaScript, .toLowerCase() (e.g., 'HELLO'.toLowerCase()) changesany string to all lowercase.
Additionally, how do we check if a string is all lowercase or all uppercase?

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false
function teenager(age){
  if ('age >= 13 && age <= 19')
  return ("You're a teenager!")
} else {"You're not a teenager"}

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
} */
