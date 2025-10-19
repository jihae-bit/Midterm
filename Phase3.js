function setup() {
  createCanvas(400, 400);   
  noStroke();               
}

function drawObject(x, y, s) {
  push();          
  translate(x, y); 
  scale(s);       
  fill(255);
  ellipse(0, 80, 120, 120);
  ellipse(0, 0, 80, 80);
  fill(255, 150, 0);
  triangle(0, 0, 0, 5, 25, 2);
  pop();          
}

function draw() {
  background(200, 220, 255); 
  
  drawObject(200, 60, 1);
  drawObject(200, 250, 1);
}
