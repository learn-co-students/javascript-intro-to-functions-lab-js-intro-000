function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
}
function logShout(string){

  console.log(string.toUpperCase())
}

function logWhisper(string){

  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var checkcase = string

  if(checkcase.toUpperCase()===checkcase){
    return "YES INDEED!";

  }
  else if (checkcase.toLowerCase()===checkcase){
    return "I can't hear you!";
  }
  else if (checkcase === "I love you, Grandma." ){
    return "I love you, too.";
  }


}
