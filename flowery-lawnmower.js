function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random( 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (mouseIsPressed) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  if(h>50){
    fill('red')
  circle(50,height-20,10)
         
  }
   if(h>60){
    fill('red')
  circle(100,height-35,10)
         
  }
   if(h>70){
    fill('red')
  circle(200,height-50,10)
         
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
