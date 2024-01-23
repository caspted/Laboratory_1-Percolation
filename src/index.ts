import readline from 'readline-sync'
import QuickUnionUF from './quickUnion'



let N = readline.questionInt()

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        var randomValue = Math.random()
        
        if (randomValue < 0.593) {
          process.stdout.write("[ ] ");
        } else {
          process.stdout.write("[#] ");
        }
    }
    process.stdout.write('\n');
}

let uf = new QuickUnionUF(N)
let input = readline.question()

while (input !== "") {
  let p = parseInt(input.split(' ')[0])
  let q = parseInt(input.split(' ')[1])

  if(!uf.connected(p, q)) {
    uf.union(p, q)
    console.log(`${p} and ${q} are connected`)
  }

  console.log(uf.ids)

  input = readline.question()
}


