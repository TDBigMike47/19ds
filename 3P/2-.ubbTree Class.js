// Node class 
class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
}

class BynaryTree{
    constructor(){
        this._root=null
    }
    insert(data){
        var newNode= new Node(data)
        
        if(this._root === null){
            this._root = newNode
        }else{
            this.insertNode(this._root, newNode);
        }
    }
    
    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left===null)
                node.left = newNode
            else 
                this.insertNode(node.left,newNode)
        }
        else{
            if(node.right===null)
                node.right = newNode
            else
                this.insertNode(node.right, newNode)

        }
    }

    remove(data) 
    { 
	this.root = this.removeNode(this._root, data); 
    } 

    removeNode(node, key) 
    { 
        if(node === null) 
	    	return null; 
	    else if(key < node.data){ 
		    node.left = this.removeNode(node.left, key); 
		    return node; 
	    }else if(key > node.data){ 
		    node.right = this.removeNode(node.right, key); 
		    return node; 
    	}else{ 
		    if(node.left === null && node.right === null){ 
			    node = null; 
			    return node; 
		}if(node.left === null) { 
			node = node.right; 
			return node
		}else if(node.right === null) { 
			node = node.left; 
			return node; 
        }
        var aux = this.findMinNode(node.right); 
		node.data = aux.data; 

		node.right = this.removeNode(node.right, aux.data); 
		return node; 
	} 

} 

    findMinNode(node) 
    { 
    if(node.left === null) 
        return node; 
    else
        return this.findMinNode(node.left); 
    }

    preorder(node){ 
    if(node != null) 
        { 
        console.log(node.data); 
        this.preorder(node.left); 
        this.preorder(node.right); 
        } 
    }
    
    getRootNode(){ 
    return this._root; 
    }
    bft(root) {
        root=this._root
        if (root === null) {
          return;
        }
        var queue = [];
        queue.push(root);

        while (queue.length > 0) {
          var node = queue[0];
          if (node.left !== null) {
            queue.push(node.left)
          }
          if (node.right !== null) {
            queue.push(node.right)
          }
          var imp=queue.shift()
          console.log(imp)
        }
        
      }  
}

var BT = new BynaryTree()
//ROOT
BT.insert(15);
//LEAFS 
BT.insert(25); 
BT.insert(10); 
BT.insert(7); 
BT.insert(22); 
BT.insert(17);
BT.insert(13);
BT.insert(5)
BT.insert(9)
BT.insert(27)
//GET THE ROOT
var root = BT.getRootNode();
//Metodo impresion equipo
BT.preorder(root)
console.log("-------------------------------------------------------")
//Eliminar leaf without children
BT.remove(13)
BT.preorder(root)
console.log("--------------------------------------------------------")
//Trasnversal search
BT.bft(root)
console.log("--------------------------------------------------------")
//Remove leaf with children 
BT.remove(7)
BT.preorder(root)
console.log("--------------------------------------------------------")
BT.bft(root)


