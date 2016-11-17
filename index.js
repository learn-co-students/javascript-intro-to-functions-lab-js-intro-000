function shout(arg){
  return arg.toUpperCase();
}

function whisper(arg){
  return arg.toLowerCase();
}

function logShout(arg){
  arg = arg.toUpperCase();
  console.log(arg);
}

function logWhisper(arg){
  arg = arg.toLowerCase();
  console.log(arg);
}

function sayHiToGrandma(arg){
  if (arg === "I love you, Grandma.") return "I love you, too.";
  if (arg === arg.toLowerCase()) return "I can\'t hear you!";
  if (arg === arg.toUpperCase()) return "YES INDEED!";
}
