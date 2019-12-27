function shout(hello) {

  return hello.toUpperCase()

}

function whisper(hello) {

  return hello.toLowerCase()

}

function logShout(hello) {

  console.log(shout(hello))
}

function logWhisper(hello) {

  console.log(whisper(hello))
}

function sayHiToGrandma(hello) {

  if (hello===whisper(hello)) {
    return "I can\'t hear you!"
  } else if (hello===shout(hello)){
    return "YES INDEED!"
  } else if (hello==="I love you, Grandma.")
    return "I love you, too."
}
