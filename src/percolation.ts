export default class Percolation {
  private grid: boolean[][]
  private n: number
  private openSites: number

  constructor (n: number) {
    this.n = n
    this.grid = Array.from({ length: n }, () => Array(n).fill(false))
    this.openSites = 0
  }

  private isValid(row: number, column: number): boolean {
    return row >= 0 && row < this.n && column >= 0 && column < this.n
  }

  open(row: number, column: number): void {
    if (this.isValid(row, column)) {
      this.grid[row][column] = true
      this.openSites++
    } else {
      throw new Error('Invalid indices')
    }
  }

  isOpen(row: number, column: number): boolean {
    if (this.isValid(row, column)) {
      return this.grid[row][column]
    } else {
      throw new Error('Invalid indices')
    }
  }

  isFull(row: number, column: number): boolean {
    if (this.isValid(row, column)) {
      return true
    } else {
      throw new Error('Invalid indices')
    }
  }

  numberOfOpenSites(): number {
    return this.openSites
  }

  percolates(): boolean {
    for (let i = 0; i < this.n; i++) {
      if (this.isOpen(this.n - 1, i)) {
        return true
      }
    }
    return false
  }

}
