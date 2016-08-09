function shout(string){
   return string.toLocaleUpperCase()
};

function whisper(string){
   return string.toLocaleLowerCase()
};

function logShout(string){
   console.log(string.toLocaleUpperCase())
};

function logWhisper(string){
   console.log(string.toLocaleLowerCase())
};

function sayHiToGrandma(string){
	if (string === "I love you, Grandma.") 
	{
		return "I love you, too."
	}
	else if (string === string.toLocaleUpperCase())
	{
        return "YES INDEED!"
	}
	else
	{
       return "I can\'t hear you!"
	}

};