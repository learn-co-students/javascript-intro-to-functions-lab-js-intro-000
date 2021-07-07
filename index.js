function shout(string) {
  return 'hello'.toUpperCase()
}

function whisper(string) {
  return "hello".toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
switch (string) {
  case 'hello':
    return "I can't hear you!"
    break;
    case 'HELLO':
      return "YES INDEED!"
      break;
  default:
    return "I love you, too."
}
}
