function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = 'I can\'t hear you!'
  var uppercase = 'YES INDEED!'
  var mixedCase = 'I love you, Grandma.'
if(string.toLowerCase() === mixedCase.toLowerCase()){
    console.log('I love you, too.')
    return 'I love you, too.';
}else if (string.toLowerCase() === string ) {
    console.log(lowercase);
    return lowercase;
  } else if (string.toUpperCase() === string ) {
    console.log(uppercase);
  	return uppercase;
  }
}
