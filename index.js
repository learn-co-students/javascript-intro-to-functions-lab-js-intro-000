// 'Hello!'.toUpperCase()// 'HELLO'

function shout(string) {
  return string.toUpperCase()
}

// 'Hello!'.toLowerCase()// 'HELLO'

function whisper(string) {
  return string.toLowerCase()
}

  // 'Hello'.toUpperCase()// 'HELLO'

function logShout(string) {
  console.log(string.toUpperCase())
}

// 'Hello!'.toLowerCase()// 'HELLO'

function logWhisper(string) {
  console.log(string.toLowerCase())
}

// 'hello'.toLowerCase() // 'I can't hear you!'

function sayHiToGrandma(string) {
  if (string.toLowerCase() == string) {
    return "I can't hear you!"
} else if (string.toUpperCase() == string) {
    return "YES INDEED!"
  } else if (string == "I love you, Grandma.") {
    return "I love you, too."
  }
}
