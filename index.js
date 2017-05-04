function shout(phrase){
  return phrase.toUpperCase();
}

function whisper(phrase){
  return phrase.toLowerCase();
}

function logShout(phrase){
  console.log(phrase.toUpperCase());
}

function logWhisper(phrase){
  console.log(phrase.toLowerCase());
}

function sayHiToGrandma(phrase){
  if (phrase === "I love you, Grandma.")
    return "I love you, too."
  if (phrase === phrase.toLowerCase())
    return "I can't hear you!";
  else if (phrase === phrase.toUpperCase())
    return "YES INDEED!";
}