//Variables
  let screen = 0;
  let y = -20;
  let x = 200;
  let speed = 2;
  let score = 0;


//Code
function setup() {
  //Height
  spriteHeight = 50;
  //Width
  spriteWidth = 50;
  //Start Values
  spriteX = 50;
  spriteY = 350;
  createCanvas(400, 400);
  angleMode(DEGREES);
  speedX = random(400);
}


function draw() {
  background(220);
  push();
  var color1 = color(94, 110, 136, 255);
  var color2 = color(250, 93, 53, 255);
  setGradient(0, 0, 400, 400, color1, color2, "Y");
  pop();
  
//Water
  push();
  noStroke();
  fill("rgb(57,57,200)");
  rect(0, 340, 600, 400);
  fill("rgb(46,46,152)");
  rect(0, 360, 600, 400);
  fill("rgb(42,42,123)");
  rect(0, 380, 600, 400);
  pop();
 
//Sprite
  addSprite(mouseX - 45, 130);

//Other
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
  } else if (screen == 2) {
    endScreen();
  }
}


//Gradient
function setGradient(x, y, w, h, c1, c2, axis) {
  push();
  noFill();
  
  
  //Top of Bottom Gradient
  if (axis == "Y") {
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
  // Left to right gradient
  if (axis == "X") {
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
  pop();
}

//Start Screen Function
function startScreen() {
  background("rgb(150,93,67)");
  fill("white");
  textAlign(CENTER);
  text("Boat Catch", width / 2, height / 2);
  text("Click to Begin", width / 2, height / 2 + 20);
  reset();
}

//End Screen Function
function endScreen() {
  background(150, 43, 39);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  text("SCORE = " + score, width / 2, height / 2 + 20);
  text("Click to Restart", width / 2, height / 2 + 40);
}

//Start of Game
function gameOn() {
  text("score = " + score, 35, 20);
  noStroke();
  ellipse(x, y, 20, 20);
  y += speed;
  if (y > height) {
    screen = 2;
  }
  if (y > height - 10 && x > mouseX - 20 && x < mouseX + 20) {
    y = -20;
    speed += 0.5;
    score += 1;
  }
  if (y == -20) {
    pickRandom();
  }
}

//Reset Function
function reset() {
  score = 0;
  speed = 2;
  y = -20;
}

//MouseIsPressed Function
function mousePressed() {
  if (screen == 0) {
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}

//Boat Sprite
function addSprite(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill("gray")
  rect(42, 140, 7, 60)
  fill("white")
  triangle(42, 185, 42, 110, 10, 185)
  if (mouseIsPressed) {
    fill("#80471C");
  } else {
    fill("#5E2C04");
  }
  quad(0, 200, 90, 200, 64, 220, 30, 220);
  pop();
}

function pickRandom() {
  x = random(20, width - 20);
}
