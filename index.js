function shout(string) {return string.toUpperCase()}
function whisper(string) {return string.toLowerCase()}
function logShout(string) {console.log('HELLO')}
function logWhisper(string) {console.log('hello')}
function sayHiToGrandma(string) { // 'hello' == 'HELLO'
  if (string == shout(string)) { // 'hello' == 'HELLO'
      return "YES INDEED!"
  } else if (string == whisper(string)){ // this condition will be if the string is equal to the string lowercased
    return "I can\'t hear you!"
  } else if (string == "I love you, Grandma."){ // this condition will be if the string is equal to  "I love you, Grandma."
    return "I love you, too."
  }
}