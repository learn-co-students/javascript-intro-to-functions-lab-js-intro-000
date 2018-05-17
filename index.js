function shout(string1) {  //defining a function named shout w/ variable string1
	return string1.toUpperCase()  //function will perform the task of turning an text to all uppercase format using return call
}

function whisper(string1) {  //defining a function named shout w/ variable string1
  return string1.toLowerCase()  //function will perform the task of turning an text to all uppercase format using return call
}

function logShout(string1) {  //declaring function
  'calls console.log() its one argument in all caps', console.log(string1.toUpperCase())  //same function as shout, but, using console.log to display
}

function logWhisper(string1) {
  console.log(string1.toLowerCase())  //same function as whisper, but, using console.log to output
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return 'I can\'t hear you!';
  }
  if (string.toUpperCase() === string) {
    return 'YES INDEED!';
  }
  if ('I love you, Grandma.' === string) {
    return 'I love you, too.'
  }
}
