function shout(string) { var string;
  return string.toUpperCase();
}
shout('memo');
function whisper(string) { var string;
  return string.toLowerCase();
}
whisper('BANK');
function logShout(string) { var string;
  var holdcaps = string.toUpperCase();
  console.log(holdcaps);
}
logShout('test');
function logWhisper(string) { var string;
  var holdcaps = string.toLowerCase();
  console.log(holdcaps);
}
logWhisper('PAPA');
function sayHiToGrandma(string) { // var compareit = string;
  if (string.toLowerCase() === string ) { return `I can't hear you!`;}
    else if (string.toUpperCase() === string ){ return `YES INDEED!`;}
     else {return `I love you, too.`; }
}
sayHiToGrandma('whisperit'); sayHiToGrandma('SHOUTIT'); sayHiToGrandma('I love you, too.'); //
