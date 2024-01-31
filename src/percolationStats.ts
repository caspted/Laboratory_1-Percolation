import Percolation from './percolation';

class PercolationStats {
  private thresholdValues: number[] = [];

  constructor(n: number, trials: number) {
    if (n <= 0 || trials <= 0) {
      throw new Error('Both grid size and trials must be greater than 0');
    }

    for (let i = 0; i < trials; i++) {
      const percolation = new Percolation(n);
      let openedSites = 0;

      while (!percolation.percolates() && openedSites < n * n) {
        const row = Math.floor(Math.random() * n);
        const column = Math.floor(Math.random() * n);

        if (!percolation.isOpen(row, column)) {
          percolation.open(row, column);
          openedSites++;
        }
      }

      const threshold = openedSites / (n * n);
      this.thresholdValues.push(threshold);
    }
  }

  mean(): number {
    const sum = this.thresholdValues.reduce((acc, value) => acc + value, 0);
    return sum / this.thresholdValues.length;
  }

  stddev(): number {
    const mean = this.mean();
    const sumSquaredDiffs = this.thresholdValues.reduce(
      (acc, value) => acc + Math.pow(value - mean, 2),
      0
    );
    return Math.sqrt(sumSquaredDiffs / (this.thresholdValues.length - 1));
  }

  confidenceLow(): number {
    const mean = this.mean();
    const stddev = this.stddev();
    const sqrtT = Math.sqrt(this.thresholdValues.length);
    return mean - (1.96 * stddev) / sqrtT;
  }

  confidenceHigh(): number {
    const mean = this.mean();
    const stddev = this.stddev();
    const sqrtT = Math.sqrt(this.thresholdValues.length);
    return mean + (1.96 * stddev) / sqrtT;
  }
}

export default PercolationStats;