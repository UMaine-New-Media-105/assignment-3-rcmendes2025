function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  addSprite();
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
