function shout(str)
{
  return str.toUpperCase()
}

function whisper(str)
{
  return str.toLowerCase()
}

function logShout(str)
{
  console.log(str.toUpperCase())
}
function sayHiToGrandma(str)
{
  if (str === "I love you, Grandma.")
  {
    return "I love you, too."
  }
  else if (str === shout(str))  {
    return "YES INDEED!"
  }
  else {
    return "I can't hear you!"
  }
}
function logWhisper(str)
{
  console.log(whisper(str))
}
