class Graph {
  constructor(isDirected = false) {
    this.adjacencyList = new Map();
    this.isDirected = isDirected;
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2, weight = 1) {
    // Add vertices if they don't exist
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjacencyList.get(vertex1).push({ node: vertex2, weight });

    if (!this.isDirected) {
      this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) return;

    //go through all edges for all other vertexes, remove this vertex
    for (let [vertex, edges] of this.adjacencyList) {
      this.adjacencyList.set(
        vertex,
        edges.filter((edge) => edge.node !== vertex),
      );
    }

    // Remove the vertex itself
    this.adjacencyList.delete(vertex);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList.has(vertex1) &&
      this.adjacencyList.set(vertex1,
        this.adjacencyList.get(vertex1).filter((e) => e.node !== vertex2),
      );

    if (!this.isDirected && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2).filter((e) => e.node !== vertex1),
      );
    }
  }

  bfs() {}

  dfs() {}

  print() {
    for (let [vertex, edges] of this.adjacencyList) {
      const edgeList = edges.map((e) => `${e.node}(${e.weight})`).join(", ");
      console.log(`${vertex} -> ${edgeList}`);
    }
  }
}

const undirectedGraph = new Graph(false);

undirectedGraph.addEdge("Alice", "Bob");
undirectedGraph.addEdge("Alice", "Fred");

undirectedGraph.print();

// undirectedGraph.removeVertex("Alice");
undirectedGraph.removeEdge("Alice", "Bob");

undirectedGraph.print();

// const directedGraph = new Graph(true);

// directedGraph.addEdge('1', '2');
// directedGraph.addEdge('2', '3');
