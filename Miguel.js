function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  stroke("indigo")
  fill("black");
  
  
  if(mouseIsPressed) {
  rect(mouseX, mouseY, 20, 20); 
  }
}
