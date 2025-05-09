function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('canvas-container');
  noLoop();
}

function draw() {
  background('#fff');

  // Campo
  fill('#a8e6cf');
  rect(0, 200, width / 2, 200);

  // Cidade
  fill('#dcedc1');
  rect(width / 2, 200, width / 2, 200);

  // Sol
  fill('#ffd3b6');
  ellipse(100, 100, 80);

  // Casa rural
  fill('#ff8b94');
  rect(100, 250, 80, 80);

  // Prédio urbano
  fill('#355c7d');
  rect(400, 180, 60, 150);
  fill('#fff');
  for (let y = 190; y < 310; y += 20) {
    rect(410, y, 10, 10);
  }
}
