import { Graph, WeightedGraph } from "./WeightedGraph";
import { Vertex } from './Vertex'

interface Path {
  path: string[];
  distance: number;
}

export interface IDijkstra<T> {
  findShortestPath(vertex1: T, vertex2: T): Path;
  findAllShortestPaths(vertex: T): Record<string, Path>;
}

export class Dijkstra<T> implements IDijkstra<Vertex> {
  public graph: WeightedGraph<Vertex>

  constructor(graph: WeightedGraph<Vertex>) {
    this.graph = graph
  }

  findAllShortestPaths(vertex: Vertex): Record<string, Path> {
    const visited: Vertex[] = []
    const paths = this.initializePaths(vertex)

    while (visited.length < this.graph.vertices.length) {
      const unvisitedVertices = this.graph.vertices.filter(item => !visited.includes(item))

      const minVertex = unvisitedVertices.reduce(
        (acc, item) => paths[item.key].distance < paths[acc.key].distance ? item : acc,
        unvisitedVertices[0]
      )

      this.graph.edges.forEach(item => {
        if (item.from === minVertex || item.to === minVertex) {
          const adjacentVertex = item.from === minVertex ? item.to : item.from
          const newDistance = paths[minVertex.key].distance + item.weight

          if (newDistance < paths[adjacentVertex.key].distance) {
            paths[adjacentVertex.key] = {
              distance: newDistance,
              path: [...paths[minVertex.key].path, adjacentVertex.key],
            }
          }
        }
      })

      visited.push(minVertex)
    }

    return paths
  }

  initializePaths(start: Vertex) {
    const paths: Record<string, Path> = {}
    this.graph.vertices.forEach(vertex => {
      paths[vertex.key] = {
        distance: vertex === start ? 0 : Infinity,
        path: vertex === start ? [start.key] : []
      }
    })

    return paths
  }

  findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
    return { path: ['1'], distance: 0 }
  }
}