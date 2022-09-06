
export class Edge<T> {
  public from: T
  public to: T
  public weight: number
  
  constructor(from: T, to: T, weight: number) {
    this.from = from
    this.to = to
    this.weight = weight
  }
}