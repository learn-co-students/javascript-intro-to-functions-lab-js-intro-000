


function shout(string){
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}
function whisper(string){
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
}
function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase);
}
function logWhisper(string){
  lowercase = string.toLowerCase()
  string = uppercase;
  console.log(lowercase);
}
function sayHiToGrandma(string){
    if (string.toLowerCase() === string){
      return 'I can\'t hear you!';
    }
    if (string.toUpperCase() === string){
      return 'YES INDEED!';
    }
    if (string === 'I love you, Grandma.'){
      return 'I love you, too.';
    }
}

function logShout (aWord) {
  console.log(aWord.toUpperCase( ));
}

function logWhisper (aWord) {
  console.log(aWord.toLowerCase( ));
}

'Hello!'.toUpperCase() // 'HELLO!'

function shout(string) {
  return string.toUpperCase()
}


'Hello!'.toLowerCase() // 'hello!'

function whisper(string) {
  return string.toLowerCase()
}
