function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("grey");
  fill("yellow");
  stroke("black");
  strokeWeight(13);
  textSize(22);
  textStyle(BOLDITALIC);
  triangle(75, 389, 242, 63, 391, 387);
  text("Lebron James", 165, 249);
  text("is the goat", 167, 287);
}
