function trafficLightController(colour){
const colourInput =(window.prompt("Type a Colour",));

if(typeof(colourInput)==="green"){
const result="Go";
console.log(result);
}
elseif(typeof(colourInput)==="Red"){
const result="stop";
console.log(result);
}
elseif(typeof(colourInput)===="yellow"){
const result ="wait";
console.log(result);
}
return trafficLightController(result);
}


//9. Traffic Light
//Be a traffic light controller! Ask the user for a color (like “red” or “green”) and
//save it in a box. If it’s “green,” say, “Go!” If it’s “red,” say, “Stop!” If it’s “yellow,”
//say, “Wait!” Use choices to pick the right message
