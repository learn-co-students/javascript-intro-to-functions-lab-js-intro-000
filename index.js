function shout(string) {
  return string.toUpperCase()
}

shout('hello');

function whisper(string) {
  return string.toLowerCase()
}

whisper('HELLO');

function logShout(string) {
  console.log(string.toUpperCase())
}

logShout('hello');

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper('HELLO');

/* First Try with if - else if

function sayHiToGrandma(string) {
  if (string.toLowerCase) {
    return "I can't hear you!"}

  else if (string.toUpperCase) {
    return "YES INDEED!"}

  else if (string=='I love you, Grandma.') {
    return 'I love you, too.'}
}
*/

function sayHiToGrandma(string) {
  switch (string) {
    case "hello":
    return "I can't hear you!"

    case "HELLO":
    return "YES INDEED!"

    case "I love you, Grandma.":
    return "I love you, too."
  }
}
