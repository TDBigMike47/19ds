/*ubbTree Class//unsorted, binary, balanced
---------
---------
constructor()
insert(n)
remove(n)
yours()//traversal
bft()//breadth-first */
class Nodo {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
class UBBTree { 
    constructor() {
        this.root = null;
    }
    insert(num){//15,7, 6  ---- 6
        let newNode = new Nodo(num);
        if (this.root === null) {
            this.root = newNode;
        }else{
            let current = this.root;
            function loop(nodo){//7
                if(num < nodo.data){
                    if(nodo.left === null)
                        nodo.left = newNode;
                    else
                        loop(nodo.left);
                    
                }else{
                    if(nodo.right === null)
                        nodo.right = newNode;
                    else
                        loop(nodo.right);
                }
            }
            loop(current);
        }
    }
    remove()
    preOrder(tree = this.root){//N,L,R.    // 1,5,10
        console.log(tree);
            if(tree.left != null)
            {
                this.preOrder(tree.left)
                //d console.log(tree.left);
            }
            if(tree.right != null){
                this.preOrder(tree.right)
                // console.log(tree.right);
            }
        
    }
    bft(tree = this.root){//6, 3, 6, 2, 7
        /*     
                6
               / \
              3   6
             / \ / \
            2       7
        */
        console.log(tree);
        if(tree === null){
            return;
        }
        let queue = [];
        queue.push(tree);

        while(queue.length > 0){
            let currentNode = queue[0];

            if(currentNode.left !== null){
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null){
                queue.push(currentNode.right);
            }
            queue.shift();
        }
    }
}

const tree = new UBBTree();

tree.insert(3);
console.log(tree.root)