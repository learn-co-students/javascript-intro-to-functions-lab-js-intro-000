const shout = string => string.toUpperCase()

const whisper = string => string.toLowerCase()

const logWhisper = string => console.log(string.toLowerCase())

function logShout(string) {
    console.log(string.toUpperCase())
}

const sayHiToGrandma = (string) => {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if (string === "I love you, Grandma.") {
        return "I love you, too."
    }

}