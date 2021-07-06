function shout(hello){
  return hello.toUpperCase()
}
function whisper(HELLO){
  return HELLO.toLowerCase()
}
function logShout(hello){
  console.log(hello.toUpperCase())
}
function logWhisper(HELLO){
  console.log(HELLO.toLowerCase())
}
function sayHiToGrandma(hello){
  switch(hello){
    case('hello'):
    return("I can't hear you!");
    break;
    case('HELLO'):
    return("YES INDEED!");
    break;
    case('I love you, Grandma.'):
    return("I love you, too.");
    break;
  }
}
