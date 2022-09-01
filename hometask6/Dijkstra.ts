import { Graph } from "./WeightedGraph";

interface Path {
  path: string[];
  distance: number;
}

interface IDijkstra<T> {
  findShortestPath(vertex1: T, vertex2: T): Path;
  findAllShortestPaths(vertex: T): Record<string, Path>;
}

export class Dijkstra<T> implements IDijkstra<T> {
  public graph: Graph<T>

  constructor(graph: Graph<T>) {
    this.graph = graph
  }
}