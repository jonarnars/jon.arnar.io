function setup() {
  createCanvas(300,300);
  background(100);
  noStroke();
  frameRate(5);
  colorMode(HSB);
}

function draw() {
  for(var x = 0; x < width; x = x + 50){
    for(var y = 0; y < height; y = y + 100){
      for(var z = 0; z < 200; z = z + 10) {
      fill(random(0,360),360,360);
      ellipse(x-z,y+z, x-20,y-z);
  }
  }
  }
  }
