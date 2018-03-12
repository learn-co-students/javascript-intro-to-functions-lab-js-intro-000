/* Lets Shout*/
function shout(string){
  /*Check for non uppercase input */
  if(string.toUpperCase() != string){
    return string.toUpperCase();
  }
  return string;
    
}

/* Lets Whisper*/
function whisper(string){
/*Check for non lowercase input */
  if(string.toLowerCase() != string){
    return string.toLowerCase();
  }
  return string;
}

/* Lets store what we did */
function logShout(string){
  /*Call the shout function to restore to console */
  console.log(shout(string));
}

function logWhisper(string){
  /*Call the whisper function to restore to console */
  console.log(whisper(string));
}

/*Lets talk to Granma*/
function sayHiToGrandma(string){

  if((string === string.toLowerCase()) == true){
    return "I can\'t hear you!";
  }
  
  if((string.toUpperCase() === string) == true){
    return "YES INDEED!";
    
  }

  if(string == "I love you, Grandma."){
    return "I love you, too.";
    
  }


}

