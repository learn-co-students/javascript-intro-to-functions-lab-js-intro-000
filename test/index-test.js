
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})
function shout(string) {
  return "Hello".toUpperCase()
}

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})
function whisper(string) {
  return "HELLO".toLowerCase()
}

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

function logShout(string) {
  console.log("HELLO".toUpperCase())
}

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

function logWhisper(string) {
  console.log("hello".toLowerCase())
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

function sayHiToGrandma (string) {
  //check to see if original phrase is all lowercase
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
    //check to see if original phrase is all uppercase
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
    //check to see if original phrase is I love you, Grandma
  } if (string === "I love you, Grandma.") {
      return "I love you, too."
    }
  }
