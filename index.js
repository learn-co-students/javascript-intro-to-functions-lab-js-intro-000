// describe('shout(string)', function shout('hello'){
//   return'hello'.toUpperCase()
//   it('receives one argument and returns it in all caps', function() {
//
//   })
// })

//part 1. we need to make a function called shour
// part 2. we need to give the function an argument
// part 3. take that argument and uppercase it
//part 4. return the CAPSED argument
function shout(string){
  return string.toUpperCase()
}

//1.make a function called whisper
//2.receives one argument
//3.returns argument in all lowercase

function whisper(string) {
  return string.toLowerCase()
}
//1.make a function called logShout()
//2.give function a argument
//3.take that argument and log it in all caps
//4. use console.log to log it

function logShout(string) {
  console.log (string.toUpperCase())
}
//1. make a function called logWhisper
//2. make a argument for function
//3. take that argument an log it in all lowercase
//4. use console.log to log it


function logWhisper(string) {
  console.log (string.toLowerCase())
}
//1. make a function called sayHiToGrandma(string)
//2.make sure function has argument = string
//3.make a if statement
//4.check if string is lowercase
//5. if string is lowerCase make it return 'I cant hear you'


function sayHiToGrandma(string) {
  if(string === string.toLowerCase()){
    return "I can't hear you!"
  } else if(string === string.toUpperCase()) {
    return 'YES INDEED!'
  } else if(string === 'I love you, Grandma.') {
    return 'I love you, too.'
  } else{
    return string 
  }
}
