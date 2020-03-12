const shout = (string) => {
  return string.toUpperCase();
};

function whisper(string) {
  return string.toLowerCase();
};

function logShout(string) {
  const newString = string.toUpperCase();
  console.log(newString);
};

function logWhisper(string) {
  const newString = string.toLowerCase();
  console.log(newString);
};

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return "I can't hear you!";
  }
  else if (string.toUpperCase() === string) {
    return 'YES INDEED!';
  }
  else if ('I love you, Grandma.' === string) {
    return 'I love you, too.';
  }
};
