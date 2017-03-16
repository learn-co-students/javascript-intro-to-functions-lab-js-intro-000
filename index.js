 function shout (string){
   return string.toUpperCase ()
 }
function whisper(string){
  return string.toLowerCase()
}
function logShout (string){
  var lowercase ='hello'.toUpperCase();

  console.log(lowercase);
}
function logWhisper (string){
  var uppercase = 'HELLO'.toLowerCase();

  console.log(uppercase);
}

function sayHiToGrandma(string){
  
    if (string===whisper(string)){
      return "I can\'t hear you!";
    }

     if (string===shout(string)){
      return "YES INDEED!";
    }

    if (string =='I love you, Grandma.'){
      return `I love you, too.`;
    }
    


}
