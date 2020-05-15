function shout(statement) {
  return statement.toUpperCase()
}

function whisper(statement) {
  return statement.toLowerCase()
}

function logShout(statement) {
  console.log(statement.toUpperCase());
}

function logWhisper(statement) {
  console.log(statement.toLowerCase());
}

function sayHiToGrandma(statement) {
  if (statement === statement.toLowerCase()) {
    return ("I can't hear you!")
  } else if (statement === statement.toUpperCase()) {
    return ("YES INDEED!")
  } else if (statement === "I love you, Grandma.") {
    return ("I love you, too.")
  }
}
