function trafficLightController(colour){
const input = colourInput(window.prompt("Type a Colour",));
if(typeof(input)==="green"){
console.log("Go");
}
elseif(typeof(input)!=="RED"){
console.log("stop")}
elseif(typeof(input)!=="yellow"){
console.log("wait")}
}

//. Traffic Light

//.Be a traffic light controller! Ask the user for a color (like “red” or “green”) and

//.save it in a box. If it’s “green,” say, “Go!” If it’s “red,” say, “Stop!” If it’s “yellow,”

//.say, “Wait!” Use choices to pick the right message.
