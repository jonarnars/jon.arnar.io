var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;
var munur = 15;

function setup(){
  createCanvas (300,300);
}

function draw(){
  background('rgb(0,255,0)');
  fill('#fae');
  ellipse(x, y, faceWidth, faceHeight);

fill(color(0, 0, 255));
   var eyeLX = width/2 - faceWidth*0.20;
    var eyeRX = width/2 + faceWidth*0.20;
    ellipse(eyeLX, height/2, eyeSize, eyeSize);
    ellipse(eyeRX, height/2, eyeSize, eyeSize);

  // munur
  fill('red');
  arc(160, 180, munur, munur, 0, PI + QUARTER_PI, PIE);




  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
  munur      = random(15, 40);
}
