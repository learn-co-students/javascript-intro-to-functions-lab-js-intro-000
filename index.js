function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var string = 'HELLO';
  console.log(string);
}


function logWhisper(string) {
  var string = 'hello';
  console.log(string);
}

function sayHiToGrandma(string) {
  var uppercase = 'YES INDEED!'
  var lowercase = 'I can\'t hear you!'
  var mixedcase = 'Hi there!'
  var truelove = 'I love you, Grandma.'
  if(string.toUpperCase() === string) {
    return uppercase
  } else if(string.toLowerCase() === string) {
    return lowercase
  } else if (string === truelove) {
    return 'I love you, too.'
  } else if (mixedcase.toUpperCase === mixedcase && mixedcase.toLowerCase() === mixedCas) {
    return mixedcase
  }
}
