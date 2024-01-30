class WeightedUnionUF {
  ids: number[];
  size: number[];

  constructor(N: number ){
    this.ids = []
    this.size = []

    for (let i = 0; i < N; i++) {
      this.ids.push(i);
    }
  }

  private root(i: number) {
    while (i != this.ids[i]) {
      this.ids[i] = this.ids[this.ids[i]];
      i = this.ids[i]
    }
    return i
  }

  connected(p: number, q: number){
    return this.root(q) == this.root(q)
  }

  union(p: number, q: number) {
    let i = this.root(p)
    let j = this.root(q)
    if (i == j) return;

    if (this.size[i] < this.size[j]) {
      this.ids[i] = j;
      this.size[j] += this.size[i]
    } else {
      this.ids[j] = i;
      this.size[i] += j;
    }
  }
}