function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
  var ret;
  var strHello = "Hello";
  var strLoveGma = "I love you, Grandma.";
  var strLoveToo = "I love you, too.";
  var strCantHear = "I can\'t hear you!";
  var strYesIndeed = "YES INDEED!";
  
  switch (str) {
    case strHello.toLowerCase():
      ret = strCantHear;
      break;
    case strHello.toUpperCase():
      ret = strYesIndeed;
      break;
    case strLoveGma:
      ret = strLoveToo;
      break;
    default:
      ret = "Thank you :)"
  }
  
  return ret;
}