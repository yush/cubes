const DRAW_SIZE = 50;
let grid: Grid;
let pointer: Cursor;

const EMPTY_FACE = 0;
const FULL_FACE_1 = 1;
const FULL_FACE_2 = 2;
const DUAL_FACE_1 = 3;
const DUAL_FACE_2 = 4;
const DUAL_FACE_3 = 5;

function setup() {
  grid = new Grid();
  pointer = new Cursor();
  createCanvas(DRAW_SIZE * SIZE, DRAW_SIZE * SIZE);
  background(128);
  fill(102);
}

function drawGrid(grid: Grid) {
  let face: Face;
  noStroke();
  push();
  for (let iRow = 0; iRow < grid.Size(); iRow++) {
    push();
    for (let iCol = 0; iCol < grid.Size(); iCol++) {
      face = grid.getFace(iRow, iCol);
      drawFace(face.color, face.rotation);
      translate(DRAW_SIZE, 0);
    }
    pop();
    translate(0, DRAW_SIZE);
  }
  pop();
}

function drawFullFace() {
  rect(0, 0, DRAW_SIZE, DRAW_SIZE);
}

function drawDualFace(color1: p5.Color, color2: p5.Color, rotation: number) {
  push();
  const MID_POINT = DRAW_SIZE / 2;
  translate(MID_POINT, MID_POINT);
  rotate(rotation);
  quarterTriangle(color1);
  rotate(-HALF_PI);
  quarterTriangle(color1);
  rotate(-HALF_PI);
  quarterTriangle(color2);
  rotate(-HALF_PI);
  quarterTriangle(color2);
  pop();
}

function quarterTriangle(color: p5.Color) {
  fill(color);
  triangle(0, 0, DRAW_SIZE / 2, DRAW_SIZE / 2, -DRAW_SIZE / 2, DRAW_SIZE / 2);
}

function drawFace(faceId: number, rotation: number) {
  let colorEmpty: p5.Color = color(255, 255, 255);
  let color1: p5.Color = color(0, 255, 0);
  let color2: p5.Color = color(0, 0, 255);
  switch (faceId) {
    case EMPTY_FACE:
      fill(colorEmpty);
      drawFullFace();
      break;

    case FULL_FACE_1:
      fill(color1);
      drawFullFace();
      break;

    case FULL_FACE_2:
      fill(color2);
      drawFullFace();
      break;

    case DUAL_FACE_1:
      drawDualFace(color1, color2, rotation);
      break;

    case DUAL_FACE_2:
      drawDualFace(colorEmpty, color1, rotation);
      break;

    case DUAL_FACE_3:
      drawDualFace(colorEmpty, color2, rotation);
      break;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pointer.Left();
  } else if (keyCode === RIGHT_ARROW) {
    pointer.Right();
  } else if (keyCode === UP_ARROW) {
    pointer.Top();
  } else if (keyCode === DOWN_ARROW) {
    pointer.Bottom();
  }
  print(`x: ${pointer.col}, y:${pointer.row}`);
}

function keyTyped() {
  if (key === "a") {
    grid.setColor(pointer.row, pointer.col, EMPTY_FACE);
  } else if (key === "z") {
    grid.setColor(pointer.row, pointer.col, FULL_FACE_1);
  } else if (key === "e") {
    grid.setColor(pointer.row, pointer.col, FULL_FACE_2);
  } else if (key === "q") {
    grid.setColor(pointer.row, pointer.col, DUAL_FACE_1);
  } else if (key === "s") {
    grid.setColor(pointer.row, pointer.col, DUAL_FACE_2);
  } else if (key === "d") {
    grid.setColor(pointer.row, pointer.col, DUAL_FACE_3);
  } else if (key === "r") {
    grid.rotateColor(pointer.row, pointer.col);
  }
}

function drawCursor(aCursor: Cursor) {
  noFill();
  stroke(255, 0, 0);
  rect(aCursor.col * DRAW_SIZE, aCursor.row * DRAW_SIZE, DRAW_SIZE, DRAW_SIZE);
}

function draw() {
  drawGrid(grid);
  drawCursor(pointer);
}
