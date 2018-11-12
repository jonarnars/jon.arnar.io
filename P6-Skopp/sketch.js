var x = 100;
var y = 100;
var hradiX = 5;
var hradiY = 11;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;

function setup() {
	createCanvas(600,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(255,200,0);
	// Reikna ný hnit út frá hraða boltans:
  x = x + hradiX;
  y = y + hradiY;
	// Athuga hvort boltinn snertir veggi:
  if ((x > width-boltiStaerd/2) || (x < boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  if ((y > height-boltiStaerd/2) || (y < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
	// Athuga hvort bolti snertir spaða:
	// abs() táknar algildi/tölugildi
	if(abs(spadiY - y) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - x) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = hradiY * -1;
		stig = stig + 1;
	}
	// Teikna boltann, spaðann og stigin
  fill(236,36,94);
  rect(x, y, boltiStaerd, boltiStaerd);
	rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
	fill(0);
	text("Stig: " + stig,20,20);
}
