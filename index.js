 describe('shout(string)', function() {
   it('receives one argument and returns it in all caps', function() {
     expect(shout('hello')).toEqual('HELLO')
   })
 })
function shout (aWord) {
  return aWord.toUpperCase( );
}

 describe('whisper(string)', function() {
   it('receives one argument and returns it in all lowercase', function() {
     expect(whisper('HELLO')).toEqual('hello')
   })
 })
function whisper (aWord) {
  return aWord.toLowerCase( );
}

describe('logShout(string)', function() {
   it('calls console.log() its one argument in all caps', function() {
     const spy = expect.spyOn(console, 'log').andCallThrough()

     logShout('hello')

     expect(spy).toHaveBeenCalledWith('HELLO')

     console.log.restore()
   })
 })
function logShout (aWord) {
  console.log(aWord.toUpperCase( ));
}

describe('logWhisper(string)', function() {
   it('calls console.log() its one argument in all lowercase', function() {
     const spy = expect.spyOn(console, 'log').andCallThrough()

     logWhisper('HELLO')

     expect(spy).toHaveBeenCalledWith('hello')

     console.log.restore()
   })
 })
function logWhisper (aWord) {
  console.log(aWord.toLowerCase( ));
}

 describe('sayHiToGrandma(string)', function() {
   it('returns "I can\'t hear you!" if `string` is lowercase', function() {
     expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
   })

   it('returns "YES INDEED!" if `string` is uppercase', function() {
     expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
   })

   it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
     expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
   })
 })
function sayHiToGrandma (aWord) {
  var cantUnswer = "I can't hear you!";
  var yesUnswer = "YES INDEED!";
  var lovUnswer = "I love you, too.";
  if (aWord.toLowerCase(aWord) === aWord) {
    return cantUnswer;
  }
  else if (aWord.toUpperCase(aWord) === aWord) {
    return yesUnswer;
  }
  else if ("I love you, Grandma." === aWord) {
    return lovUnswer
  }
}
