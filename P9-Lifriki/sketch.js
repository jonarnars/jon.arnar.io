var bobs = [];

function setup() {
  createCanvas(600, 600);
  // Búum til hundrað zoog hluti.
  for (var i = 0; i < 10; i = i+1){
    bobs[i] = new Bob(random(200,400),random(100,400),random(50,200));
  }
}

function draw() {
	background(200,150,0);
  fill(255,200,0);
	ellipse(300,300,500,500);
  // Teiknum og hreyfum alla Zoog kallana okkar
  for (var i = 0; i < bobs.length; i = i+1){
  	bobs[i].move();
  	bobs[i].show();
  }
}

function mousePressed(){
  for (var i = bobs.length-1; i >= 0; i = i-1){
    if(fjarl(bobs[i].x,bobs[i].y,mouseX,mouseY) < 50){
		    bobs.splice(i,1);
	  }
  }
}


class Bob{
  constructor(x,y,bukur,litur) {
    this.x = x;
    this.y = y;
    this.bukur = bukur;
		this.dir = random(0,2*PI);
		this.speed = random(1,3);
		this.bukurColor = color(100,100,100);
  }

  // Teiknar geimveruna zoog
   show(){
    ellipseMode(CENTER);
  //búkur
  fill(this.bukurColor);
  ellipse(this.x,this.y,70,this.bukur)
 //haus
  fill(255);
  ellipse(this.x,this.y - this.bukur/2, 80,80);
  // augu
  fill(100);
  ellipse (this.x - 15,this.y - this.bukur/2, 10,20);
  ellipse (this.x + 15,this.y - this.bukur/2, 10,20);
  //fætur
  line (this.x - 10, this.y + this.bukur/2, this.x - 40, this.y + this.bukur/2 + 50);
  line (this.x + 10, this.y + this.bukur/2, this.x + 40, this.y + this.bukur/2 + 50);

}

  // Hreyfir zoog um skjáinn.
  // Hann minnkar sífelt hraðann, en velur svo slembistenfu
  // og fyglir henni á nyjum slbenum hraða.
	move(){
		this.x = this.x + this.speed*cos(this.dir);
		this.y = this.y + this.speed*sin(this.dir);
		this.speed = this.speed/1.05;
		if(this.speed < 0.1){
			this.dir = random(0,2*PI);
			this.speed = random(1,5);
		}
      if (fjarl(this.x,this.y,width/2,height/2) > 250){
      	this.blink();
        this.dir = atan((this.y - height/2)/(this.x-width/2));
        if(this.x - width/2 > 0){
        	this.dir = this.dir + PI;
        }
      }
	}

  // Velur slembinn lit fyrir augun á zoog.
	blink(){
		this.bukurColor = color(random(255), random(255), random(255));
	}
}

// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarl(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
