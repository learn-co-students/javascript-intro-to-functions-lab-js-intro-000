'use strict';

var shout = function(string) {
  return string.toUpperCase();
}

var whisper = function(string) {
  return string.toLowerCase();
}

var logShout = function(string) {
  console.log(string.toUpperCase());
}

var logWhisper = function(string) {
  console.log(string.toLowerCase());
}

var sayHiToGrandma = function(string) {
  var msg;

  if (string === string.toUpperCase()) {
    msg = 'YES INDEED!';
  }

  if (string === string.toLowerCase()) {
    msg = 'I can\'t hear you!';
  }

  if (string === 'I love you, Grandma.') {
    msg = 'I love you, too.';
  }

  return msg;
}
