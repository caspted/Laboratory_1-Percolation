import readlineSync from 'readline-sync'
import PercolationStats from './percolationStats'

const n = parseInt(readlineSync.question('Enter grid size (n): '), 10);
const T = parseInt(readlineSync.question('Enter number of trials (T): '), 10);

const percolationStats = new PercolationStats(n, T);

console.log(`Mean: ${percolationStats.mean()}`);
console.log(`Standard Deviation: ${percolationStats.stddev()}`);
console.log(
  `95% Confidence Interval: [${percolationStats.confidenceLow()}, ${percolationStats.confidenceHigh()}]`
);
