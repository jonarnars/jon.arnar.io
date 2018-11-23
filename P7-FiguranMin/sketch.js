function setup() {
  createCanvas(400,500);
}

function draw() {
  background(155,600,0);
  boo(200,200,130);
}

function boo(x,y,bukur){
  ellipseMode(CENTER);
  //búkur
  fill(236,36,94);
  ellipse(x,y,70,bukur)
 //haus
  fill(255);
  ellipse(x,y - bukur/2, 80,80);
  // augu
  fill(100);
  ellipse (x - 25,y - bukur/2, 20,40);
  ellipse (x + 25,y - bukur/2, 20,40);
  //fætur
  line (x - 10, y + bukur/2, x - 40, y + bukur/2 + 50);
  line (x + 10, y + bukur/2, x + 40, y + bukur/2 + 50);

}
