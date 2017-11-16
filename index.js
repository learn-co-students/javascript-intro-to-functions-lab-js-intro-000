function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
console.log(string.toUpperCase());
  function spyOn(spy) {
  console.log(spy.andCallThrough());
}
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  function spyOn(spy) {
    console.log(spy.andCallThrough());
  }
}

function sayHiToGrandma(string) {
  switch(string) {
  case (string = string.toLowerCase()):
  return "I can't hear you!";
  break;
  case (string = string.toUpperCase()):
  return "YES INDEED!";
  break;
  case ("I love you, Grandma."):
  return "I love you, too.";
}
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
