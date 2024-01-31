class WeightedQuickUnion {
  private parent: number[];
  private size: number[];

  constructor(n: number) {
    this.parent = []
    this.size = []

    for (let i = 0; i < n; i++) {
      this.parent.push(i)
    }
  }

  find(root: number): number {
    while (root !== this.parent[root]) {
      // Path compression: set each examined node to point directly to the root
      this.parent[root] = this.parent[this.parent[root]];
      root = this.parent[root];
    }
    return root;
  }

  union(p: number, q: number): void {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP === rootQ) return;

    // Weighted union: connect the smaller tree to the root of the larger tree
    if (this.size[rootP] < this.size[rootQ]) {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    } else {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    }
  }

  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }
}

export default WeightedQuickUnion