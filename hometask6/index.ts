import { Dijkstra, IDijkstra } from "./Dijkstra";
import { Edge } from "./Edge";
import { Vertex } from "./Vertex";
import { Graph, WeightedGraph } from "./WeightedGraph";

const vertices = [
  new Vertex('1'),
  new Vertex('2'),
  new Vertex('3'),
  new Vertex('4'),
  new Vertex('5')
];
const edges = [
  new Edge(vertices[0], vertices[3], 3),
  new Edge(vertices[0], vertices[1], 5),
  new Edge(vertices[0], vertices[2], 4),
  new Edge(vertices[1], vertices[3], 6),
  new Edge(vertices[1], vertices[2], 5),
];
const graph: WeightedGraph<Vertex> = new Graph();

vertices.forEach(vertex => graph.addVertex(vertex));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));



const dijkstra: IDijkstra<Vertex> = new Dijkstra<Vertex>(graph);

// dijkstra.findShortestPath(vertex4, vertex3); // { path: ['4', '1', '3'], distance: 7 }
// dijkstra.findShortestPath(vertex1, vertex5); // { path: [], distance: Infinity }
// dijkstra.findShortestPath(vertex1, vertex1); // { path: ['1'], distance: 0 }

console.log(dijkstra.findAllShortestPaths(vertices[3]));

/*
 {
   '1': { path: ['4', '1'], distance: 3 },
   '2': { path: ['4', '2'], distance: 6 },
   '3': { path: ['4', '1', '3'], distance: 7 },
   '5': { path: [], distance: Infinity }
 }
*/