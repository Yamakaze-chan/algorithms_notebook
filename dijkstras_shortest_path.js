function dijkstra(graph, start) {
    // Create an object to store the shortest distance from the start node to every other node
    let distances = {};

    // A set to keep track of all visited nodes
    let visited = new Set();

    // Get all the nodes of the graph
    let nodes = Object.keys(graph);

    // Initially, set the shortest distance to every node as Infinity
    for (let node of nodes) {
        distances[node] = Infinity;
    }
    
    // The distance from the start node to itself is 0
    distances[start] = 0;

    // Loop until all nodes are visited
    while (nodes.length) {
        // Sort nodes by distance and pick the closest unvisited node
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();

        // If the shortest distance to the closest node is still Infinity, then remaining nodes are unreachable and we can break
        if (distances[closestNode] === Infinity) break;

        // Mark the chosen node as visited
        visited.add(closestNode);

        // For each neighboring node of the current node
        for (let neighbor in graph[closestNode]) {
            // If the neighbor hasn't been visited yet
            if (!visited.has(neighbor)) {
                // Calculate tentative distance to the neighboring node
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                
                // If the newly calculated distance is shorter than the previously known distance to this neighbor
                if (newDistance < distances[neighbor]) {
                    // Update the shortest distance to this neighbor
                    distances[neighbor] = newDistance;
                }
            }
        }
    }

    // Return the shortest distance from the start node to all nodes
    return distances;
}

var inputs = readline().split(' ');
const N = parseInt(inputs[0]);
const M = parseInt(inputs[1]);
// const grid = {
//     // A: { B: 1, C: 4 },       // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
//     // B: { A: 1, C: 2, D: 5 }, // ... and so on for other nodes
//     // C: { A: 4, B: 2, D: 1 },
//     // D: { B: 5, C: 1 }
// };
grid = new Set()
for(i=1; i<= N;i++) grid[i]=new Set();
for (let i = 0; i < M; i++) {
    var inputs = readline().split(' ');
    const house1 = parseInt(inputs[0]);
    const house2 = parseInt(inputs[1]);
    const cost = parseInt(inputs[2]);
    // for undirected graph ( remove line 69 if we only go from house1 to house2 and can't go back)
    grid[house1][house2] = cost
    grid[house2][house1] = cost
}

console.log('number of connections and total cost');
console.log(dijkstra(grid, 1)); //dijkstra( <graph>, <starting point>)

`
Input:
Line 1: two integers, N and M, respectively the number of houses, and the number of connectable pairs
Next M lines three integers House1, House2 and Cost representing a possible connection between two houses

Input: 
3 3
1 2 1
2 3 99
1 3 7
`
