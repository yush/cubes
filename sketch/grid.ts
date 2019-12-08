const SIZE: number = 5;

class Face {
  public color: number = 0;
  public rotation: number = 0;
}

class Grid {
  grid: Face[][] = new Array<Array<Face>>();

  constructor() {
    let color = 0;
    let offset = 10;
    for (let iRow = 0; iRow < SIZE; iRow++) {
      this.grid.push(new Array<Face>());
      for (let iCol = 0; iCol < SIZE; iCol++) {
        this.grid[iRow].push(new Face());
        color += offset;
      }
    }
  }

  Size(): number {
    return SIZE;
  }

  getFace(row: number, col: number): Face {
    return this.grid[row][col];
  }

  getColor(row: number, col: number): number {
    return this.grid[row][col].color;
  }

  setColor(row: number, col: number, value: number) {
    this.grid[row][col].color = value;
  }

  rotateColor(row: number, col: number) {
    this.grid[row][col].rotation = this.grid[row][col].rotation + HALF_PI;
  }
}
