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
  new Edge(vertex1, vertex4, 3),
  new Edge(vertex1, vertex2, 5),
  new Edge(vertex1, vertex3, 4),
  new Edge(vertex2, vertex4, 6),
  new Edge(vertex2, vertex3, 5),
];
const graph: WeightedGraph<Vertex> = new Graph();

vertices.forEach(verticle => graph.addVertex(verticle));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));