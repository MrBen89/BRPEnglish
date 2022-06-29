class board {

  reset(){
    this.grid = this.getEmptyBoard();
  }

  getEmptyBoard() {
    return Array.from(
      {length: rows}, () => Array(cols).fill(0)
    );
  }
}
