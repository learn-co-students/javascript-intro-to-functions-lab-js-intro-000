function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function logShout(string) {
    console.log(string.toUpperCase());
}

function sayHiToGrandma(string) {
    var testUppercase = string.toUpperCase()
    var testLowerCase = string.toLowerCase()
    if (string === testLowerCase) {
        return "I can't hear you!"
    } else if (string === testUppercase) {
        return "YES INDEED!"
    } else if (string === "I love you, Grandma.") {
        return "I love you, too."
    }
}
