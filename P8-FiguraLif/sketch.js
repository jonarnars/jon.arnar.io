var bob1, bob2, bob3;

function setup() {
  createCanvas(600, 600);
  // Búum til þrjá
  bob1 = new Bob(200,400,100);
  bob2 = new Bob(300,300,75);
  bob3 = new Bob(400,300,150);
}

function draw() {
	background(300,150,100);
  fill(255,200,0);
  ellipse(300,300,500,500);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  bob1.move();
  bob1.show();
  bob2.move();
  bob2.show();
  bob3.move();
  bob3.show();
}

// Klasinn
class Bob{
  constructor(x,y,bukur) {
    this.x = x;
    this.y = y;
    this.bukur = bukur;
    this.dir = random(0,4*PI);
    this.speed = random(1);
    this.eyeColor = color(100,100,100);
  }

  // Teiknar geimveruna
  show(){
    ellipseMode(CENTER);
  //búkur
  fill(236,36,94);
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

  // Hreyfir
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
      if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
      	this.blink();
        this.dir = atan((this.y - height/2)/(this.x-width/2));
        if(this.x - width/2 > 0){
        	this.dir = this.dir + PI;
        }
      }
	}

  // Velur slembinn lit fyrir augun á zoog.
	blink(){
		this.eyeColor = color(random(255), random(255), random(255));
	}
}


// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
