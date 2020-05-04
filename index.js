function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  // Initialize variables - including possible permutations of string input.
  var result = "";
  var stringUpper = string.toUpperCase();
  var stringLower = string.toLowerCase();

  // If statements to determine if string input meets criteria.
  if(string === stringLower){
    result = "I can't hear you!";
  } else if(string === stringUpper){
    result = "YES INDEED!";
  } else if(string === "I love you, Grandma."){
    result = "I love you, too.";
  }

  // return the resulting string. Allows for single point control.
  return result;
}
