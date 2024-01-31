import WeightedQuickUnion from './weightedUnion';

class Percolation {
  private grid: boolean[];
  private n: number;
  private openSites: number;
  private uf: WeightedQuickUnion;

  constructor(n: number) {
    if (n <= 0) {
      throw new Error('Invalid grid size');
    }

    this.n = n;
    this.grid = []

    for (let i = 0; i < n * n; i++) {
      this.grid.push(false)
    }

    this.openSites = 0;
    this.uf = new WeightedQuickUnion(n * n + 2);
  }

  private isValid(row: number, column: number): boolean {
    return row >= 0 && row < this.n && column >= 0 && column < this.n;
  }

  open(row: number, column: number) {
    if (!this.isValid(row, column)) {
      throw new Error('Invalid indices');
    }

    const siteIndex = row * this.n + column;

    if (!this.grid[siteIndex]) {
      this.grid[siteIndex] = true;
      this.openSites++;

      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newColumn = column + dc;

        if (this.isValid(newRow, newColumn) && this.isOpen(newRow, newColumn)) {
          const neighborIndex = newRow * this.n + newColumn;
          this.uf.union(siteIndex, neighborIndex);
        }
      }

      if (row === 0) {
        this.uf.union(siteIndex, this.n * this.n);
      }

      if (row === this.n - 1) {
        this.uf.union(siteIndex, this.n * this.n + 1);
      }
    }
  }

  isOpen(row: number, column: number): boolean {
    if (!this.isValid(row, column)) {
      throw new Error('Invalid indices');
    }

    return this.grid[row * this.n + column];
  }

  isFull(row: number, column: number): boolean {
    if (!this.isOpen(row, column)) {
      return false;
    }

    return this.uf.connected(row * this.n + column, this.n * this.n);
  }

  numberOfOpenSites(): number {
    return this.openSites;
  }

  percolates(): boolean {
    return this.uf.connected(this.n * this.n, this.n * this.n + 1);
  }
}

export default Percolation;
