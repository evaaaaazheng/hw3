var ballX = 0;
var ballSpeed = 3;
var ballA =50;
var ballSpeedA = 6;
var ballB =50;
var ballSpeedB = 12;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(100, ballX, 50);

  ballX = ballX + ballSpeed;
  
  if (ballX > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballX < 0) {
    ballSpeed = -ballSpeed;
  }
  ellipse(200, ballA, 35);

  ballA = ballA + ballSpeedA;
  
  if (ballA > height) {
    ballSpeedA = -ballSpeedA;
  }
  
  if (ballA < 0) {
    ballSpeedA = -ballSpeedA;
  }
    ellipse(300, ballB , 20);

  ballB= ballB + ballSpeedB;
  
  if (ballB > height) {
    ballSpeedB = -ballSpeedB;
  }
  
  if (ballB < 0) {
    ballSpeedB = -ballSpeedB;
  }
}
