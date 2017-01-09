function shout(hello) {
  return 'hello'.toUpperCase()
}
shout();
function whisper(hello) {
  return 'hello'.toLowerCase()
}
whisper();
function logShout(hello) {
  console.log('hello'.toUpperCase())
}
logShout();
function logWhisper(hello) {
  console.log('hello'.toLowerCase())
}
logWhisper();
function sayHiToGrandma(hello) {
   if (hello == 'hello'.toLowerCase()) {
    return "I can't hear you!";
}else if (hello == 'hello'.toUpperCase()) {
   return "YES INDEED!";
}else if (hello = "I love you"+","+ " Grandma.") {
    return "I love you"+","+" too.";
}
}
sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");
