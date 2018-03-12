function shout (hello) {
  return hello.toUpperCase ()
}

function whisper (hello) {

return hello.toLowerCase ()
}
function logShout () {
console.log("HELLO");
}
function logWhisper (HELLO) {
  console.log ("hello");
}

function sayHiToGrandma(greeting) {
  if (greeting.toLowerCase() === greeting){
    return "I can\'t hear you!";
  }

  if (greeting.toUpperCase() === greeting){
    return "YES INDEED!"
  }
  if (greeting === "I love you, Grandma.") {
    return ("I love you, too.")
  }
}
