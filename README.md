# binary-search-tree

Simple node solution for binary search tree. Includes function(s):

- getDepth
  - Fetch height or how many node levels in BST
- getDeepestNodes
  - Fetch value for deepest node(s) in BST

## How to run

```
git clone https://github.com/checkhavoc/binary-search-tree.git
npm start OR yarn start
```

## TODO

- Depth First Search (DFS): 26, 82, 16, 92, 33

  - Pre Order (root, left, right): 26, 16, 92, 33, 82
  - In Order (left, root, right): 16, 26, 33, 82, 93
  - Post Order (left, right, root): 16, 33, 93, 82, 26

- Breadth First Search (BFS): 26, 82, 16, 92, 33
  - Searches by level, left to right, from topdown (Example: 26, 16, 82, 33, 92)
