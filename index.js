function shout(string){
  var toUpper = string.toUpperCase();
  return toUpper;
}

shout("Josep");


function whisper(string){
  var toLower = string.toLowerCase();
  return toLower;
}

whisper("Josep");


function logShout(string){
var logAllCaps = string.toUpperCase();
console.log(logAllCaps);

}


function logWhisper(string){
var logLowCaps = string.toLowerCase();
console.log(logLowCaps);

}


function sayHiToGrandma(string) {
    var loveGrandma = "I love you, Grandma.";
    var toLower = string.toLowerCase();
    var toUpper = string.toUpperCase();

    if (string === toLower) {
        return "I can't hear you!";
    }
    if (string === toUpper) {
        return "YES INDEED!";
    } else if (string === loveGrandma) {
        return "I love you, too.";
    }

}
