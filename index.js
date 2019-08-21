function shout(what) {
    return(what.toUpperCase())
}

function whisper(phrase) {
    return(phrase.toLowerCase())
}

function logShout(msg) {
    console.log(msg.toUpperCase())
}

function logWhisper(msg) {
    console.log(msg.toLowerCase())
}

function sayHiToGrandma(msg) {
    if (msg === "I love you, Grandma.") {
        return "I love you, too."
    } else if (msg === msg.toLowerCase()) {
        return "I can\'t hear you!"
    } else if (msg === msg.toUpperCase()) {
        return "YES INDEED!"
    }
}
