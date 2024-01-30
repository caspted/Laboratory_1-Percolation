import readline from 'readline-sync'
import PercolationStats from './percolationStats'


const readlineSync = require("readline-sync");

const n = parseInt(readlineSync.question("Enter grid size (n): "));
const T = parseInt(readlineSync.question("Enter number of trials (T): "));

const percolationStats = new PercolationStats(n, T);

console.log(`Mean: ${percolationStats.mean()}`);
console.log(`Standard Deviation: ${percolationStats.stddev()}`);
console.log(
  `95% Confidence Interval: [${percolationStats.confidenceLow()}, ${percolationStats.confidenceHigh()}]`
);


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        var randomValue = Math.random()
        
        if (randomValue < 0.593) {
          process.stdout.write("⬛️");
        } else {
          process.stdout.write("🟦");
        }
    }
    process.stdout.write('\n');
}

// let uf = new QuickUnionUF(N)
// let input = readline.question()

// while (input !== "") {
//   let p = parseInt(input.split(' ')[0])
//   let q = parseInt(input.split(' ')[1])

//   if(!uf.connected(p, q)) {
//     uf.union(p, q)
//     console.log(`${p} and ${q} are connected`)
//   }

//   console.log(uf.ids)

//   input = readline.question()
// }


