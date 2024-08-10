pre_lst = []
in_lst = []
po_lst = []
l_lst = []
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree
{
    constructor(){
        this.root = null;
    }

    getRootNode(){
        return this.root;
    }

    insert(data){
        var newNode = new Node(data);
        if(this.root === null) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }
    
    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode); 
        }
        else{
            if(node.right === null) node.right = newNode;
            else this.insertNode(node.right,newNode);
        }
    }

    preorder(node){
        if(node !== null){
            pre_lst.push(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            in_lst.push(node.value);
            this.inorder(node.right);
        }
    }

    postorder(node){
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            po_lst.push(node.value);
        }
    }

    levelorder(node) {;
        if (root === null) return;
        const queue = [];
        queue.push(root);
        while (queue.length > 0) {
            const node = queue.shift();
            l_lst.push(node.value);
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
        }
    }
    
}

const n = parseInt(readline());
var inputs = readline().split(' ');
let tree = new BinaryTree();
for (let i = 0; i < n; i++) {
    tree.insert(parseInt(inputs[i]));
}
let root = tree.getRootNode()
tree.preorder(root)
console.log(pre_lst.join(' '))
tree.inorder(root)
console.log(in_lst.join(' '))
tree.postorder(root)
console.log(po_lst.join(' '))
tree.levelorder(root)
console.log(l_lst.join(' '))

`
Input
Line 1: An integer N for the number of values.
Line 2: N space-separated values vi for the values to be inserted into a binary search tree.

Output
4 lines of N space-separated values each.
Line 1: Pre-Order-Traversal.
Line 2: In-Order-Traversal.
Line 3: Post-Order-Traversal.
Line 4: Level-Order-Traversal.
_____________________________________________________________

Input
5
8 6 13 10 5

Output
8 6 5 13 10
5 6 8 10 13
5 6 10 13 8
8 6 13 5 10
`
