class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
        this.deepestNodes = [];
    }

    /**
     * 
     * @param {*} value any
     * @returns boolean
     */
    isNullOrUndefined(value) {
        return value === null || value === undefined;
    }

    /**
     * 
     * @param {*} value int
     * @returns undefined
     */
    insert(value) {
        if (this.isNullOrUndefined(value)) return;

        /**
         * Initialize root if it does not yet exist
         */
        if (!this.root.value) {
            this.root = new Node(value);
            return;
        }

        const newNode = new Node(value);

        // Search tree to determine if a value should be added to left/right node
        // Ignores duplicates
        const searchTree = (node) => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }
            }

            if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right);
                }
            }
        };

        searchTree(this.root);
    }

    /**
     * 
     * @param {*} root Node
     * @returns int
     */
    getHeight(root) {
        if (this.isNullOrUndefined(root)) return 0;

        const leftDepth = this.getHeight(root.left);
        const rightDepth = this.getHeight(root.right);
          
        return Math.max(leftDepth, rightDepth) + 1;
    }

    /**
     * 
     * @param {*} root Node
     * @param {*} depth int
     * @returns int[] | [] | undefined
     */
    getDeepestNode(root, depth) {
        if (this.isNullOrUndefined(root)) return;
      
        if (depth === 1 && root.value){
            this.deepestNodes.push(root.value)
        } else if (depth > 1) {
            this.getDeepestNode(root.left, depth - 1);
            this.getDeepestNode(root.right, depth - 1);
        }

        return this.deepestNodes;
    }
}

/**
 * 
 * @param {*} input int[]
 * @returns string | undefined
 */
const searchBST = (input) => {
    if (!Array.isArray(input)) return;

    const bst = new BinarySearchTree();

    // Insert to binary search tree
     input.forEach((num) => {
        bst.insert(num);
    });

    const height = bst.getHeight(bst.root);
    const deepestNodes = bst.getDeepestNode(bst.root, height);

    // Minus "1" to remove the root node as we are not considering that as part of the depth value
    const depth = height - 1;

    return {
        deepestNodes,
        depth
    };
}

/**
 * Different test cases. Ideally would use a testing framework (i.e. jest)
 */
const case1 = searchBST([12, 11, 90, 82, 7, 9]);
console.log(`deepest, ${case1.deepestNodes.join(", ")}; depth, ${case1.depth}`); // deepest, 9; depth, 3

const case2 = searchBST([26, 82, 16, 92, 33]);
console.log(`deepest, ${case2.deepestNodes.join(", ")}; depth, ${case2.depth}`); // deepest, 33, 92; depth, 2

const case3 = searchBST([99, 50, 50, 50, 50]); 
console.log(`deepest, ${case3.deepestNodes.join(", ")}; depth, ${case3.depth}`); // deepest, 50; depth, 2