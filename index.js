function shout(string) {
  return (string.toUpperCase());
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
    console.log (`${string.toUpperCase()}`);
}

function logWhisper(string) {
  console.log (`${string.toLowerCase()}`);
}

function sayHiToGrandma(string) {
  if (string.toLowerCase()===string) {
    return 'I can\'t hear you!'; //if `string` is lowercase
  } else if (string.toUpperCase()===string) {
    return 'YES INDEED!'; //returns "YES INDEED!" if `string` is uppercase
  } else if (string==='I love you, Grandma.') {
    return 'I love you, too.'; //returns "I love you, too." if `string` is "I love you, Grandma."
  }
}