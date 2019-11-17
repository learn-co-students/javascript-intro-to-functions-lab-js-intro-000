function shout(strShout){
  return strShout.toUpperCase();
}

function whisper(strShout){
  return strShout.toLowerCase();
}

function logShout(strShout){
  console.log(strShout.toUpperCase());
}


function logWhisper(strShout){
  console.log(strShout.toLowerCase());
}

function sayHiToGrandma(strShout){

if (strShout === 'I love you, Grandma.'){
  return 'I love you, too.';
}
else{
  var temp = strShout;
  if (strShout.toUpperCase() === strShout)
    return "YES INDEED!";

  if (strShout.toLowerCase() === strShout)
      return "I can\'t hear you!";

}

}
