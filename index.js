function shout(string1)
{
  return string1.toUpperCase();
}

function whisper(string2)
{
  return string2.toLowerCase();
}

function logShout(string3)
{
  var string3 = string3.toUpperCase();
  console.log(string3);
}

function logWhisper(string3)
{
  var string3 = string3.toLowerCase();
  console.log(string3);
}

function sayHiToGrandma(string4)
{
  if(string4.toUpperCase() === string4)
  {
    return "YES INDEED!";
  }
  if(string4.toLowerCase() === string4)
  {
    return "I can't hear you!";
  }
  if (string4 === "I love you, Grandma.")
  {
    return "I love you, too.";
  }
}