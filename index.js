//returns string in uppercase
function shout(string){
    return string.toUpperCase()
}

//returns string in lowercase
function whisper(string){
    return string.toLowerCase()
}

//logShout = logs string in uppercase
function logShout(string){
    return console.log(string.toUpperCase())
}

//logWhisper = logs string in lowercase
function logWhisper(string){
    return console.log(string.toLowerCase())
}

/*sayHiToGrandma --> if string is lowercase return "I can't hear you!"
if string is uppercase return "YES INDEED!"
if string is "I love you, Grandma." return "I love you, too."
*/

function sayHiToGrandma(string){
    if (string == "I love you, Grandma."){
        return "I love you, too."
    } else{

        if (string === whisper(string)){
            return "I can\'t hear you!"
        } else if (string === shout(string)) {
            return "YES INDEED!"
        }
    }
}
