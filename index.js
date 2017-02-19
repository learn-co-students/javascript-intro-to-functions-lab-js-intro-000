function shout(string){
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  const spy = expect.spyOn(console,'log').andCallThrough(); 
  console.log(string.toUpperCase);
}