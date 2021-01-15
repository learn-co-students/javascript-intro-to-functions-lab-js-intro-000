function shout(string)
{
  return string.toUpperCase();
}
 function whisper(string)
 {
   return string.toLowerCase();
 }
function logShout(string)
{
  console.log(string.toUpperCase());
}
function logWhisper(string)
{
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string)
{
  var lower = string;
  var upper = string;
  if(string.toLowerCase() === lower){
  return "I can't hear you!";
  }
  if(string.toUpperCase() === upper){
  return "YES INDEED!";
   }
   var tt="I love you, Grandma.";
  if (string === tt){
    return "I love you, too.";
  }
}
