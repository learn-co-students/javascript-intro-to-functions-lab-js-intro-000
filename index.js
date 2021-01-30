function shout(str) {
    return str.toUpperCase() // we'll get to this in a sec
  }


function whisper(string) {
    return string.toLowerCase() // we'll get to this in a sec
  }


function logShout(string) {
    console.log (string.toUpperCase());
  }

function logWhisper(string) {
    console.log (string.toLowerCase());
  }



  function sayHiToGrandma(string) {
    var lowercase = string.toLowerCase();
    var uppercase = string.toUpperCase();
    var loveYou = "I love you, Grandma.";
    if (lowercase === string) {
      return "I can\'t hear you!"
    }
    if (uppercase === string) {
      return "YES INDEED!"
    }
    if (loveYou === string) {
      return "I love you, too."
    }
  }
