class Cursor {
  public col: number = 0;
  public row: number = 0;

  Left(): void {
    if (this.col > 0) {
      this.col--;
    }
  }

  Right(): void {
    if (this.col < SIZE - 1) {
      this.col++;
    }
  }

  Top(): void {
    if (this.row > 0) {
      this.row--;
    }
  }

  Bottom(): void {
    if (this.row < SIZE - 1) {
      this.row++;
    }
  }
}
