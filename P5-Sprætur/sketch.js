function setup() {
	createCanvas(700, 500);
	noStroke();
}

function draw() {
	background(255, 600, 0);
	fill(136, 136, 914);
	if(mouseX < width/2 && mouseY < height / 2){
		rect(0,0,width/2,height/2);
	}
	if(mouseX > width/2 && mouseY < height / 2){
		rect(width/2,0,width/2,height/2);
	}
	if(mouseX < width/2 && mouseY > height / 2){
		rect(0,height/2,width/2,height/2);
	}
	if(mouseX > width/2 && mouseY > height / 2){
		rect(width/2,height/2,width/2,height/2);
	}
}
