  
class Graph {
    constructor() {
        this.edges = {};
        this.vertex = [];
        this.contEdges = 0;
        this.isMult = false;
        this.conjPares = [];
    }

    addVertex(o) {
        this.vertex.push(o);
        this.edges[o] = [];
    }

    addEdge(v1, v2, weight = 1) {
        this.edges[v1].push({
            vertex: v2,
            weight: weight
        });
        this.edges[v2].push({
            vertex: v1,
            weight: weight
        });
       
        if (!this.conjPares[this.contEdges]) {
            this.conjPares[this.contEdges] = [];
            this.conjPares[this.contEdges][0] = v1;
            this.conjPares[this.contEdges][1] = v2;
        }
        this.contEdges++;
        if (v1 === v2) {
            this.isMult = true;
        }
    }
    printGraph() {
        let graph = "";
        this.vertex.forEach(vertex => {
            graph += vertex + "->" + this.edges[vertex].map(n => n.vertex).join(", ") + "\n";
        });
        console.log(graph);
    }
    isComplete() {
        let n = this.vertex.length;
        let condicion = (n * (n - 1)) / 2;
        if (condicion == this.contEdges) {
            return true;
        } else {
            return false;
        }

    }
    isMultigraph() {
        return this.isMult;
    }
    isSubgraph(g) {
        let result = false;
        if (this.pares(g) === this.nombres(g)) {
            result = true
        }
        return result;
    }
    nombres(g) {
        let result = false;
        for (let i = 0; i < this.vertex.length; i++) {
            if (this.vertex[i] == g.vertex[i]) {
                result = true;
            } else {
                result = false;
            }
        }

        return result;
    }
    pares(g) {
        let result = false;
        for (let i = 0; i < this.contEdges; i++) {
            for (let k = 0; k < 2; k++) {
                if (this.conjPares[i][k] === g.conjPares[i][k]) {
                    result = true;
                } else {
                    result = false;
                }
            }
        }
        return result;
    }
}


//Creacion de un grafo g
var g = new Graph(6);
var vertices = ['1', '2', '3', '4', '5', '6'];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

//Se le añaden edges al grafo
g.addEdge('1', '2');
g.addEdge('2', '3');
g.addEdge('3', '4');
g.addEdge('4', '1');
g.addEdge('1', '3');
g.addEdge('4', '2');
g.addEdge('3', '6');
g.addEdge('5', '6');

//Imprime el grafo
g.printGraph();
//Verifica si el grafo es completo
console.log(g.isComplete()); // false 
//Verifica si es multiple
console.log(g.isMultigraph()); // false

//Se crea un segundo grafo g2
var g2 = new Graph(3);
var vertices2 = ['1', '2', '3', '4'];
for (var i = 0; i < vertices2.length; i++) {
    g2.addVertex(vertices2[i]);
}
//Se le añaden sus edges
g2.addEdge('1', '2');
g2.addEdge('2', '3');
g2.addEdge('3', '4');
g2.addEdge('4', '1');
g2.addEdge('1', '3');
g2.addEdge('4', '2');

//Imprime el grafo
g2.printGraph();
//Hace las verificaciones: 1.Completo, 2. Multigrafo, 3. Si es subgrafo del grafo g
console.log(g2.isComplete()); //true
console.log(g2.isMultigraph()); // false
console.log(g2.isSubgraph(g)); // true


//Se genera un tercer grafo para poder crear más variables de respuesta
var g3 = new Graph(2);
var vertices3 = ['1', '2'];
for (var i = 0; i < vertices3.length; i++) {
    g3.addVertex(vertices3[i]);
}
g3.addEdge('1', '1');
g3.addEdge('1', '2');

//Imprime ese grafo
g3.printGraph();
//Hace las verificaciones: 1.Completo, 2. Multigrafo, 3. Si es subgrafo del grafo g
console.log(g3.isComplete()); //false 
console.log(g3.isMultigraph()); // true
console.log(g3.isSubgraph(g)); // false