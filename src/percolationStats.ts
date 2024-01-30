import Percolation from './percolation'

export default class PercolationStats {
  private thresholdValues: number[] = []

  constructor(n: number, trials: number) {
    if (n <= 0 || trials <= 0) {
      throw new Error('Both grid and trials must be greater than or equal to 0')
    }

    for (let i = 0; i < trials; i++) {
      const percolation = new Percolation(n)
      while(!percolation.percolates()) {
        const row = Math.floor(Math.random() * n)
        const column = Math.floor(Math.random() * n)
        percolation.open(row, column)
      }
      const threshold = percolation.numberOfOpenSites() / (n * n)
      this.thresholdValues.push(threshold)
    }
  }

  mean(): number {
    return this.thresholdValues.reduce((sum, values) => sum + values, 0) / this.thresholdValues.length
  }

  stddev(): number {
    const meanValue = this.mean()
    const squaredDifferences = this.thresholdValues.reduce((sum, values) => 
      sum + (values - meanValue) ** 2, 0
    )
    return Math.sqrt(squaredDifferences / (this.thresholdValues.length - 1))
  }

  confidenceLow(): number {
    const mean = this.mean()
    const standardDeviation = this.stddev()
    return mean - (1.96 * standardDeviation) / Math.sqrt(this.thresholdValues.length)
  }

  confidenceHigh(): number {
    const mean = this.mean()
    const standardDeviation = this.stddev()
    return mean + (1.96 * standardDeviation) / Math.sqrt(this.thresholdValues.length)
  }
}