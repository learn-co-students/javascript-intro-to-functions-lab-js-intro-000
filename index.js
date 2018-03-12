function shout(string) {
  return string.toUpperCase()
}

shout('hi');

function whisper(string) {
  return string.toLowerCase()
}

whisper('GoodBYE');

function logShout(string) {
	console.log(string.toUpperCase());
}
logShout('yo');


function logWhisper(string) {
	console.log(string.toLowerCase());
}
logWhisper('QUIETLY');


function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else  if (string === lowercase) {
		return "I can't hear you!";
    } else if (string === uppercase) {
		    return "YES INDEED!";
  }
}


sayHiToGrandma("Hello");
sayHiToGrandma("lowvoice");
sayHiToGrandma('SHOUT');
sayHiToGrandma('I love you, Grandma.');
