function shout(hello) {
  return 'hello'.toUpperCase()
};

function whisper(HELLO){
  return 'HELLO'.toLowerCase()
};
  function logShout(hello){
    console.log('hello'.toUpperCase());
  }
function logWhisper(HELLO){
  console.log('HELLO'.toLowerCase());
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";
}
