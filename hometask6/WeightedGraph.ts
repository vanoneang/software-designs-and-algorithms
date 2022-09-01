import { Edge } from "./Edge";

export interface WeightedGraph<T> {
  addVertex(vertex: T): void;
  addEdge(vertex1: T, vertex2: T, weight: number): void;
}

export class Graph<T> implements WeightedGraph<T> {
  public vertices: T[] = []
  public edges: Edge<T>[] = []

  constructor(vertices: T[] = [], edges: Edge<T>[] = []){
    this.edges = edges
    this.vertices = vertices
  }

  addVertex(vertex: T): void {
    this.vertices.push(vertex)
  }

  addEdge(vertex1: T, vertex2: T, weight: number): void {
      const edge = new Edge(vertex1, vertex2, weight)
      this.edges.push(edge)
  }
}