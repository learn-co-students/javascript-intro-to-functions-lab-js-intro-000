function shout(hello){
  var newHello = hello.toUpperCase();
  return newHello;
}
function whisper(hello){
  var newHello = hello.toLowerCase();
  return newHello;
}
function logShout(hello){
  console.log(shout(hello));
}
function logWhisper(hello){
  console.log(whisper(hello));
}
function sayHiToGrandma(hello){
  if(hello === whisper(hello)){
    return "I can\'t hear you!";
  }
  else if(hello === "I love you, Grandma."){
    return "I love you, too.";
  }
  else{
    return "YES INDEED!";
  }

}
