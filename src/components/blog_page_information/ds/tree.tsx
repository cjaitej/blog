const tree = [
  ["tittle", ["Trees", "05 Sept 2023"]],
  [
    "para",
    [
      "Follow the below colab file along with blog. Getting your hands dirty is essential. It's not just about learning, it's about doing, experimenting, and truly understanding.",
    ],
  ],
  [
    "link",
    [
      "Click here for Colab file",
      "https://colab.research.google.com/drive/18s5EvwRaGEs3Hjpv8fSltbzx1eW-6Sht?usp=sharing",
    ],
  ],
  ["heading", ["What are trees?"]],
  [
    "para",
    [
      "A tree is a nonlinear data structure that consists of nodes connected by edges. Node structure is slighty different compared to the linkedlist. Lets start with understanding what a node is.",
    ],
  ],

  ["heading1", ["ok! So, what is a node in tree? "]],
  ["picture", ["./trees/1.png", "80%", "A node in a tree."]],
  ["para", ["A node in a tree consists of three main components. "]],
  ["underline", ["1. Data:"]],
  ["para", ["Data is the place where we store information is the node."]],
  ["underline", ["2. Left pointer:"]],
  [
    "para",
    [
      "Left pointer points to the left child of the parent node. If the parent node don't have a left child, then the left pointer value will be None.",
    ],
  ],
  ["underline", ["3. Right pointer:"]],
  [
    "para",
    [
      "Right pointer points to the right child of the parent node. If the parent node don't have a right child, then the right pointer will be None.",
    ],
  ],

  //components of a tree
  ["heading1", ["Components of a tree:"]],
  ["picture", ["./trees/0.png", "70%", "Components of a tree."]],

  ["underline", ["1. root:"]],
  [
    "para",
    [
      "The top most node of tree is known as root. A root don't have a parent node.",
    ],
  ],
  ["underline", ["2. edge:"]],
  ["para", ["The connection between two nodes is known as edge."]],
  ["underline", ["3. Siblings:"]],
  [
    "para",
    [
      "If two nodes are having same parent node, then these two nodes are known as siblings.",
    ],
  ],
  ["underline", ["4. Parent:"]],
  ["para", ["A node which have child nodes is known as Parent node."]],
  ["underline", ["5. Leaf nodes:"]],
  ["para", ["The nodes which don't have child nodes is known as Leaf node."]],
  ["underline", ["6. Subtree"]],
  [
    "para",
    [
      "A tree is said to be subtree of tree T, if it has a node from tree T and all its descendants.",
    ],
  ],
  //Type of trees
  ["heading", ["Type of Trees"]],
  [
    "para",
    [
      "Now we have good understanding of what a node is and different components. So, now we can explore the different type of trees.",
    ],
  ],
  ["heading1", ["1. General tree"]],
  [
    "para",
    [
      "A general tree is a tree in which there is no restriction on its hierarchical structure. This means that any node in general tree can contain zero to any number child nodes, there is no constraint on that. ",
    ],
  ],
  ["picture", ["./trees/generaltree.jpg", "60%", "General Tree"]],
  [
    "para",
    [
      "One of the application of general tree is organizing and managing files and directories in a file system.",
    ],
  ],
  ["heading1", ["2. Binary tree"]],
  [
    "para",
    [
      "A binary tree is a tree in which a node can have atmost two child nodes. Unlike general tree we have restriction on the hierarchical structure.",
    ],
  ],
  ["picture", ["./trees/binarytree.png", "60%", "Binary Tree"]],
  [
    "para",
    [
      " Binary trees find use in hierarchical representations and expression parsing.",
    ],
  ],
  ["heading1", ["3. Binary search tree"]],
  [
    "para",
    [
      "Binary search tree is a Binary tree with one constraint. The constraint is left child node must be less than parent node and right child node must be greater than parent node.",
    ],
  ],
  ["picture", ["./trees/binarysearchtree.png", "60%", "Binary search Tree"]],
  [
    "para",
    [
      "Applications of binary search tree are Sorting, searching. Binary search trees are also used in a variety of other applications, including: Heaps, Red-Black trees, AVL Trees.",
    ],
  ],
  ["heading1", ["Complete Binary Tree"]],
  [
    "para",
    [
      "A complete binary tree is a special type of binary tree in which every level of the tree is completely filled, except possibly for the last level, which is filled from left to right.",
    ],
  ],
  ["picture", ["./trees/completebinarytree.png", "70%", ""]],
  [
    "para",
    [
      "In above picture both the trees are binary tree and also 'binary search tree' as they are following atmost 2 child rule. But right-side tree is not a complete binary tree as the node 7 and node 9 are inserted at node 8 without filling node 4. For a binary tree to be a complete binary tree, it should fill the tree from left to right",
    ],
  ],
  [
    "para",
    [
      "Heap data structure is implemented using Complete binary tree. 'Complete binary search tree' is also similar to the 'complete binary tree' but it follows 'Binary search tree' conditions that left node should be less than parent node and right node should be greater than parent node.",
    ],
  ],
  ["heading", ["Operations on Binary search tree:"]],
  ["heading1", ["1. Insertion of a node:"]],
  [
    "para",
    [
      "Traverse the tree from the root downward, comparing the value of the node you want to insert with the values of nodes as you move down the tree.",
    ],
  ],
  [
    "para",
    [
      "Compare the value of the node you want to insert with the current node's value. If the value is equal to the current node's value, you can choose whether to handle duplicate values by adding them to the left or right subtree of the current node.",
    ],
  ],
  [
    "para",
    [
      "If the value is less than the current node's value, move to the left child (if it exists). If the left child does not exist, you've found the appropriate spot to insert the new node. If the value is greater than the current node's value, move to the right child (if it exists). If the right child does not exist, you've found the appropriate spot to insert the new node.",
    ],
  ],
  ["picture", ["./trees/insetioncode.png", "80%", "Insertion Code"]],
  ["picture", ["./trees/insertion.png", "70%", "Insertion Processs"]],
];

export default tree;
