function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  let grandmaWhisperResponse = "I can't hear you!"
  let grandmaShoutResponse = "YES INDEED!"
  let loveYouGrandma = "I love you, Grandma."
  let grandmaLoveResponse = "I love you, too."

  if (string === string.toLowerCase()) {
    return grandmaWhisperResponse
  } else if (string === string.toUpperCase()) {
    return grandmaShoutResponse
  } else if (string === loveYouGrandma) {
    return grandmaLoveResponse
  }



}
