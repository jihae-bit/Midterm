# Midterm


## Phase 1 
For Phase 1, I drew my idea on paper.  
I decided to make a simple snowman using two circles for the body and head, and a triangle for the nose.  

## Phase 2 
In Phase 2, I turned my paper sketch into code.  

- set the size of canvas with 'createCanvas'
- 'noStroke' to disable drawing strokes
- light blue background with rgb number
- ellipse for the body and head of snowmen
- triangle for the nose
- 'fill' white(255) for snowmen and orange(255,150,0) for the triangle


### Phase 2 Final Code
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

[Phase2.js](https://editor.p5js.org)

## Phase 3   
Inside the function, I used:

- 'push' to save settings
- 'translate(x, y)' to move the snowman
- 'x' is for horizontal position, how far across from left to right  and 'y' for vertical position, how far down from top to bottom 
- 's' to resize the snowmen 
- first ellipse (0,80) is how far across and how far down and (120 ,120) is width and height
- second ellipse (0,0) means centered and (80,80) means smaller size
- triangle (0,0) is first point in the center and (0,5) is second point down  and (25,2)is third point 25 pixels to the right
- 'pop' to restore settings
- Then I called the function twice in 'draw' to draw two snowmen on the canvas. Both snowmen at normal size. s = 1

### Phase 3 Final Code
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

[Phase3.js](https://editor.p5js.org)

## Phase 4 
In Phase 4, I used nested for-loops to draw many snowmen in a grid pattern.  
'Push'for saving the position. 'Pop' for the restoring previous position.
By repeating the 'drawObject(x, y, s)' function inside the loops, I could fill the canvas evenly with snowmen.  
I made three different grid versions as on the instructions. 
Each version used a smaller scale value 's' so the snowmen would fit on the 400×400 canvas.  

- 5x5 snowmen

outer loop (y= 20; y <= 340; y =+ 80) starts at 20 stops at 340 moves down canvas every 80 pixels (row)
20 -> 100 -> 180 -> 260 -> -340
400 ÷ 5=80
innner loop (x= 40; x <= 360; x += 80) starts at 40, stops at 360 moves across every pixels (column) 
400-40 = 360 
400 ÷ 5=80
scale make it smaller (0.35)
scale = spacing ÷ snowman width
80 ÷ 120 around 0.67 but reduced to 0.35

- 10x10 snowmen

Outer loop : for (let y = 10; y <= 370; y =+ 40) starts at 10, stops at 370 and moves down by 40 pixels each time to create 10 rows.
Inner loop : for (let x = 20; x <= 380; x += 40) left starts at 20 stops at 380 (400-20) and moves right by 40 pixels to create 10 columns (since 400 ÷ 10 = 40)
0.2 size to fit 100 snowmen (40 ÷ 120 = 0.33 but too tight so 0.2)

- 20x20 snowmen

outer loop : for (let y = 5; y <= 395; y += 20)starts at 5, stops at 395 (400 - 5)goes down every 20 pixels to create 20 rows (400 ÷ 20 = 20)
Inner loop : for (let x = 5; x <= 395; x += 20) starts at 5, stops at 395 (400 - 5)and goes right every 20 pixels to create 20 columns.

0.1 size to fit every snowmen. (20 ÷ 120 around 0.16)

### Phase 4 Finale code
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

[Phase4-1.js](https://editor.p5js.org)

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

[Phase4-2.js](https://editor.p5js.org)

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

[Phase4-3.js](https://editor.p5js.org)

