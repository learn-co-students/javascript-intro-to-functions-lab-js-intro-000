function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log('hello'.toUpperCase())
}
function logWhisper(string){
  console.log('HELLO'.toLowerCase())
}
//
//

function sayHiToGrandma(string){
 if (string == string.toLowerCase())
 return 'I can\'t hear you!'

 else if (string == string.toUpperCase())
  return 'YES INDEED!'

  else (string == "I love you, Grandma.")
  return 'I love you, too.'
}

//This bottom code also works but the above code looks more appropriate.
/*function sayHiToGrandma(string){
  switch(string){
  case "hello" : return "I can\'t hear you!";
  break;
  case "HELLO" : return "YES INDEED!";
  break;
  case "I love you, Grandma." : return "I love you, too.";
  break;
}*/

var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase// true

var lowercase = "hello!"
lowercase.toLowerCase() === lowercase// true

var mixedCase = "Hi there!"

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false
