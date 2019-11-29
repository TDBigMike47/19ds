class node{
    constructor(data){
        this.data = data;
    }
}

class Graph {
    constructor(nodeA,dir){
        this.matrix = [[0]];
        this.nodos = [];
        this.nodos.push(nodeA);
        if(dir==true){
            this.dir =true
        }
        else{
            this.dir=false
        }
        }
    addVertex(node){
        this.nodos.push(node);
        this.matrix.push([0]);
        for(let x = 0; x<this.nodos.length; x++) this.matrix[x].push(0);
        for(let x = 0; x< (this.nodos.length-2) ; x++) this.matrix[(this.nodos.length-1)].push(0);
    }
    addEdge(v1,v2){
        this.matrix[v1][v2]++;
        if(this.dir==false)this.matrix[v2][v1]++;
    }
    printGraph(){
        let letters = []; //String.fromcharCode imprime codigo ascii
        for(let x = 0; x < this.nodos.length; x++)letters.push(String.fromCharCode(65+x));
        console.log("__  "+letters);
        for(let x = 0; x < this.nodos.length; x++){
                console.log(String.fromCharCode(x+65) +" | "+this.matrix[x] + " |")
            }
    }
    isComplete(){
        for(let x1 = 0; x1 < this.nodos.length; x1++){
            if(this.matrix[x1][x1]>0) return false; //Comprueba diagonal
            for(let x2 = 0; x2 < this.nodos.length; x2++){
                if(x1==x2);else if(this.matrix[x1][x2]!= 1) return false; //else if elimina comp de diagonal
            }
        }
        return true;
    }
    isMultigraph(){ 
        for(let x1 = 0; x1 < this.nodos.length; x1++){
            if(this.matrix[x1][x1]>0) return true; //Comprueba diagonal, contrario a isCOMPLETE()
            for(let x2 = 0; x2 < this.nodos.length; x2++){
                if(x1==x2);else if(this.matrix[x1][x2]> 1) return true; //else if elimina comp de diagonal
            }
        }
        return false;
    }
    isSubgraph(g){
        if(this.matrix.length == g.matrix.length){
            for(let x1 = 0; x1 < this.nodos.length; x1++){
                for(let x2 = 0; x2 < this.nodos.length; x2++){
                    if(this.matrix[x1][x2] != g.matrix[x1][x2]) return false; //Comprueba 1v1 de graphA y graphB
                }
            } return true;
        }else return false;
    }

    isDirected(){
            var count=0
            for(var a=0;a<this.nodos.length;a++){
                for(var b=0;b<this.nodos.length;b++){
                    if(this.matrix[a][b]==this.matrix[b][a]){
                         count++
                    }
                }
            }
            if(count==(this.nodos.length*this.nodos.length)){
                return false
            }
            else{
                return true
            }
    
    }
}


let nodo0 = new node("nodo0");
let nodo1 = new node("nodo1");
let nodo2 = new node("nodo2");
let nodo3 = new node("nod03")

let grafo = new Graph(nodo0,true);
grafo.addVertex(nodo1);
grafo.addVertex(nodo2);

grafo.addEdge(0,1);
grafo.addEdge(0,2);
grafo.addEdge(1,2);

grafo.printGraph();

console.log(grafo.isComplete())
console.log(grafo.isMultigraph())
console.log(grafo.isDirected());
console.log("------------------------------------------")

let grafo2 = new Graph(nodo0,false)
grafo2.addVertex(nodo1)
grafo2.addVertex(nodo2)

grafo2.addEdge(0,1)
grafo2.addEdge(2,1)
grafo2.printGraph();
console.log(grafo2.isComplete())
console.log(grafo2.isMultigraph())
console.log(grafo2.isSubgraph(grafo))
console.log(grafo2.isDirected());