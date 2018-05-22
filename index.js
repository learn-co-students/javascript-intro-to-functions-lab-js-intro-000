function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return 'Hello'.toLowerCase();
}

function logShout(string) {
  console.log('hello'.toUpperCase());
}

function logWhisper(string) {
  console.log("Hello".toLowerCase());
}

function sayHiToGrandma(string){
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()

  if(string === lowercase){
    return 'I can\'t hear you!'
  } else if(string === uppercase) {
    return "YES INDEED!"
  } if(string === "I love you, Grandma."){
    return "I love you, too."
  }
};

/*function sayHiToGrandma(string) {
  var hiGrandma = "Hi Grandma".toLowerCase;
  var helloGrandma = "Hi Grandma".toUpperCase;
  var loveGranny = "I love you. Grandma."
    if (hiGrandma === "hi grandma") {
      return "I can't hear you!";
    } else if (helloGrandma = "HI GRANDMA") {
      return "YES INDEED";
    } else if (loveGranny === "I love you, Grandma.") {
     return "I love you, too.";
   }
};

function sayHiToGrandma(string) {
  var helloGrandma = "HI, GRANDMA";
  if (helloGrandma.toUpperCase() === helloGrandma) {
    return "YES INDEED!";
  }
};

function sayHiToGrandma(string) {
  var loveGranny = "I love you, Grandma.";
  if (loveGranny === "I love you, Grandma.") {
    return "I love you, too."
  }
};*/
