function setup() {
  createCanvas(700, 700);
  fill(255);
  strokeWeight(10)
  rect(5, 5, width - 10, height - 10)

  let col = [color('#001FFF'), color('#FF0000'), color('#FFF700'), color('#FFFFFF')];

  for(let r = 0; r < 7; r++){
      fill(col[floor(random(col.length))]);
      strokeWeight(10);
      rect(r / windowWidth - 5, r / windowHeight - 5, random(width - 5), random(height - 5));
    }
  }

function draw() {
}
