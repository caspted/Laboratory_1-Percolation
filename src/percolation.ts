class Percolation {
  private grid: boolean[][]
  private n: number
  private openSites: number

  constructor (n: number) {
    this.n = n
    this.grid = Array.from({ length: n }, () => Array(n).fill(false))
    this.openSites = 0
  }

  open (row: number, col: number): void {
    if (this.isValidIndex(row, col)) {
      this.grid[row][col] = true
      this.openSites++
    } else {
      throw new Error('Invalid indices')
    }
  }

  isOpen (row: number, col: number): boolean {
    if (this.isValidIndex(row, col)) {
      return this.grid[row][col]
    } else {
      throw new Error('Invalid indices')
    }
  }

  isFull (row: number, col: number): boolean {
    if (this.isValidIndex(row, col)) {
      return true
    } else {
      throw new Error('Invalid indices')
    }
  }

  numberOfOpenSites (): number {
    return this.openSites
  }

  percolates (): boolean {
    return true
  }

  private isValidIndex (row: number, col: number): boolean {
    return row >= 0 && row < this.n && col >= 0 && col < this.n
  }
}
