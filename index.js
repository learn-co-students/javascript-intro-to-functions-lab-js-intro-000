function shout(string) {
  string = "hello".toUpperCase()
  return string;
}

function whisper(string) {
  //returns lowercase
  string = 'HELLO'.toLowerCase()
  return string;
}

function logShout(string, spy) {
  // calls console.log all lowercase
  spy = 'hello'.toUpperCase()
  console.log(spy)
}

function logWhisper(string) {
  // console.log all lowercase
  string = "Hello".toLowerCase()
  console.log(string)
}

function sayHiToGrandma(string) {
  //returns "I can't hear you!" if `string` is lowercase
  if (string === string.toLowerCase()) {
    var lowerCase = string.toLowerCase();
    return ('I can\'t hear you!');
  } else if (string === string.toUpperCase()) {
    var uppCase = 'YES INDEED!';
    return ('YES INDEED!');
  } else {
    var mixedCase = 'I love you, too.';
    return(mixedCase);
  }
}
