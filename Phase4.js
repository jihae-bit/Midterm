//5x5 snowmen

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
  fill(255); 
  ellipse(0, 0, 80, 80);
  fill(255, 150, 0); 
  triangle(0, 0, 0, 5, 25, 2);
  pop();
}

function draw() {
  background(200, 220, 255);

  for (let y = 20; y <= 340; y += 80) {   
    for (let x = 40; x <= 360; x += 80) { 
      drawObject(x, y, 0.35);
    }
  }
}

//10x10 snowmen

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
  fill(255);
  ellipse(0, 0, 80, 80);
  fill(255, 150, 0); // nose
  triangle(0, 0, 0, 5, 25, 2);
  pop();
}

function draw() {
  background(200, 220, 255);

  for (let y = 10; y <= 370; y += 40) {     
    for (let x = 20; x <= 380; x += 40) {   
      drawObject(x, y, 0.2);                
    }
  }
}

//20x20 snowmen 

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
  fill(255); 
  ellipse(0, 0, 80, 80);
  fill(255, 150, 0);
  triangle(0, 0, 0, 5, 25, 2);
  pop();
}

function draw() {
  background(200, 220, 255);

  for (let y = 5; y <= 395; y += 20) {     
    for (let x = 5; x <= 395; x += 20) {   
      drawObject(x, y, 0.1);              
    }
  }
}
