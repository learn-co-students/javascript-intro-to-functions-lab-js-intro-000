function shout(phrase)
{
  return phrase.toUpperCase();
}

function whisper(phrase)
{
  return phrase.toLowerCase();
}

function logShout(phrase)
{
  return console.log(phrase.toUpperCase());
}

function logWhisper(phrase)
{
  return console.log(phrase.toLowerCase());
}

function sayHiToGrandma(phrase)
{
  var uppercase=phrase.toUpperCase();
  var lowercase=phrase.toLowerCase();
  if(phrase===lowercase)
  return "I can\'t hear you!";
  else {
    if(phrase===uppercase)
    return "YES INDEED!";
    else {
      if(phrase==="I love you, Grandma.")
      return "I love you, too.";
    }
  }
}