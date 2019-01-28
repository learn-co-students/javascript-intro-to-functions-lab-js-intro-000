function shout (string){
  return 'hello'.toUpperCase()
}

function whisper (string){
  return 'HELLO'.toLowerCase()
}

function logShout(string){
  console.log('hello'.toUpperCase())
}

function logWhisper(string){
  console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string){
  switch(string){
    case 'hello':
    return 'I can\'t hear you!'
      break;
    case 'HELLO':
    return 'YES INDEED!'
      break;
    case 'I love you, Grandma.':
    return 'I love you, too.'
  }
}
