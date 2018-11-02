// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(400,400);
    background(60,0,60);
  	frameRate(5);
  	colorMode(HSB); }

function draw() {
	for(var x = 0; x < width; x = x + 10) {
  	fill(random(0,360),75,100);
  	for(var y = 0; y < height; y = y + 10) {
    ellipse(x+5, y+5, 10, 10);
  }
}
}
