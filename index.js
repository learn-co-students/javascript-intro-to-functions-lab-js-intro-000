function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    return console.log(string.toUpperCase());
}

function logWhisper(string) {
    return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    var upperCase = string.toUpperCase(), ret;

    if (string === "I love you, Grandma.")
       ret = "I love you, too."
    else if (upperCase !== string)
       ret =  "I can't hear you!";
    else if (upperCase === string)
       ret = "YES INDEED!";

    return  ret;
}
