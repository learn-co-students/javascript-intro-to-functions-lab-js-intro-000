/* since we want to use return and console.log in this case,
I want to use return for the first two and console.log in
the next two. Last will need a conditional workflow management system*/
//1) receives one argument and returns it in all caps1
function shout (input) {
  return input.toUpperCase();
}
//2) receives one argument and returns it in all lowercase
function whisper (input) {
  return input.toLowerCase();
}
//3) calls console.log() its one argument in all caps
function logShout (input) {
  console.log(input.toUpperCase());
}
//4) calls console.log() its one argument in all lowercase
function logWhisper (input) {
  console.log(input.toLowerCase());
}
//5) returns "I can't hear you!" if `string` is lowercase
//6) returns "YES INDEED!" if `string` is uppercase
//7) returns "I love you, too." if `string` is "I love you, Grandma."
function sayHiToGrandma (input) {
  if (input === "I love you, Grandma.") {
    return "I love you, too."
  }
  else if (input === input.toUpperCase()) {
    return "YES INDEED!"
  }
  else {
  return "I can't hear you!"
  }
}
