function shout(thing){
  return thing.toUpperCase();
}

function whisper(thing){
  return thing.toLowerCase();
}

function logShout(thing){
  return console.log(thing.toUpperCase());
}

function logWhisper(thing){

    return console.log(thing.toLowerCase());

}

function sayHiToGrandma(thing){

  var num = 0;

  if (thing.toUpperCase() === thing)
    num =1;
  if(thing.toLowerCase() === thing)
  num =2;

  if (thing === "I love you, Grandma.")
  num =3;

    switch(num){

      case 1 :
        return "YES INDEED!";
        break;
      case 2 :
        return "I can\'t hear you!";
        break;
      case 3:
        return "I love you, too.";
        break;
      default:
        return null;
        }


}
