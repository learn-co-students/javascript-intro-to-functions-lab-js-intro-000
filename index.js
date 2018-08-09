
function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log (string.toUpperCase());
  
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  if (string===string.toLowerCase()){
    return 'I can\'t hear you!';
  } else if (string===string.toUpperCase()){
    return 'YES INDEED!';
  } else if (string==="I love you, Grandma."){
    return "I love you, too.";
  }
  
}
  

/*function sayHiToGrandma(String){
   console.log('I love you, Grandma.');
  return'I love you, too.';
}*/


=======
function shout(String){
  String.toUpperCase();
}


function whisper(String){
  String.toLowerCase();
}

function logShout(String){
  String.toLowerCase();
  console.log(String);
}

function logWhisper(String){
  String.toLowerCase();
}

function sayHiToGrandma(String){
  String.toLowerCase();
  console.log("I can't hear you!");
}

function sayHiToGrandma(String){
  String.toUpperCase();
  console.log("Yes Indeed!");
  console.log("I love you, Grandma.");
  console.log("I love you, too.");
}
>>>>>>> 7f4346e9c07f9f07360812f535023ff2216d3f4f
