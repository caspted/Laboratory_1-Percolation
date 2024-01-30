class QuickFindUF {
  ids: number[]

  constructor(N: number) {
    this.ids = []

    for (let i = 0; i < N; i++) {
      this.ids.push(i)
    }
  }

  connected(p: number, q: number): boolean {
   return this.ids[p] == this.ids[q]
  }

  union(p: number, q: number) {
    let pid = this.ids[p]
    let qid = this.ids[q]

    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] == pid) {
        this.ids[i] == qid
      }
    }
  }
}

