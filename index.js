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
  var lowercase=string.toLowerCase();
  var uppercase=string.toUpperCase();
  
  switch(string){
    case(string=lowercase): return "I can\'t hear you!";
    
    case(string=uppercase): return "YES INDEED!";
    
    case ("I love you, Grandma."): return "I love you, too.";
    
  }
}
