function setup() {
  createCanvas(150, 150); 
  noStroke();             
}

function draw() {
  background(200, 220, 255); 
  fill(255);                 
  ellipse(75, 110, 60, 60);  
  fill(255);                
  ellipse(75, 60, 40, 40);   
  fill(255, 150, 0);         
  triangle(75, 60, 75, 65, 95, 62); 
}