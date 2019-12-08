const FILENAME = "store";

class GridStore {
  private list: Grid[] = new Array<Grid>();

  addGrid(grid: Grid) {
    this.list.push(grid);
  }

  export() {
    saveJSON(this.list, FILENAME);
  }

  import() {
    this.list.push(loadJSON(FILENAME));
  }
}
