/**
 * 
 * "document" is an object created the js execution enviroment 
 *it represents the tree of the web page we are manipulating 
 *in the memory
 *'getElementById' this method is used to obtain an
 *element in the web page by its id
 *
 */
 const start = document.getElementById("start");
 console.log(start);
 console.debug(start);
 const stop = document.getElementById("stop");
 console.log(stop);
 const reset = document.getElementById("reset");
 console.log(reset);
 //Retrive an element that does not exist from the web page DOM
 const anyElement = document.getElementById("any thing");
 console.log(anyElement);
 const timer = document.getElementById("timerDisplayer");
 console.log(timerDisplayer);
 //start.addEventListener('event type','action');
 //Associate an element with a type of event and an action
 //that we want to respond to the event
 //the first parameter: the type of event
 //the second is a function 
 start.addEventListener("click",()=>{
   console.log("jajaja");
 });
 console.log("1");