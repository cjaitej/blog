const linkedlist = [
  ["tittle", ["Understanding Linked List", "26 Aug 2023"]],
  [
    "para",
    [
      "In this blog, I want to let you know that I won't be including any computer code. My intention is to concentrate on providing a clear explanation of concepts and ideas.",
    ],
  ],
  ["heading", ["What are Linked List ?"]],
  [
    "para",
    [
      "A linked list is a linear data structure where data is linked using pointers. A node in a linked list consists of two parts: the first part stores data, and the second part holds the address of the next node.",
    ],
  ],
  [
    "para",
    [
      "The data is stored in the DATA part of the linked list. The NEXT pointer is used to store the address of the next node. For the last node, the next pointer value will be NULL.",
    ],
  ],
  [
    "picture",
    ["./linkedlist/single linkedlist.png", "65%", "Single Linked List"],
  ],
  [
    "para",
    [
      "The first node in the linked list is called HEAD, and the last node is called TAIL. Since the TAIL node is the last node in the linked list, it cannot have the address of the next node. Therefore, it points the next pointer to a null value.",
    ],
  ],
  ["heading", ["Types of Linked list"]],
  ["para", ["There are four types of Linked List:"]],
  ["para", ["1. Singly Linked List. (Explained Above)"]],
  ["para", ["2. Doubly Linked List."]],
  [
    "picture",
    ["./linkedlist/double linkedlist.png", "55%", "Doubly Linked list"],
  ],
  [
    "para",
    [
      "Doubly Linked list are similar to the single linked list, but it has a new pointer called prev pointer, which will be pointing to the previous node. As the HEAD node dont have any previous node, the prev pointer of the HEAD node will be Null.",
    ],
  ],
  ["para", ["3. Circular Linked List."]],
  [
    "picture",
    ["./linkedlist/circular linkedlist.png", "55%", "Circular Linked list"],
  ],
  [
    "para",
    [
      "A circular linked list is similar to a regular linked list, but in a circular linked list, the last node stores the address of the HEAD node as the next node to it.",
    ],
  ],
  ["para", ["4. Circular Double Linked List."]],

  [
    "picture",
    [
      "./linkedlist/circulardouble linkedlist.png",
      "55%",
      "Circular Double Linked list",
    ],
  ],
  [
    "para",
    [
      "A circular doubly linked list is a combination of a doubly linked list and a circular linked list. It has both 'prev' and 'next' pointers, and the last node points back to the HEAD node.",
    ],
  ],
  ["heading", ["Operations on Linked list"]],
  [
    "para",
    [
      "All the types of linked list have Insertion, Deletion, Traversal operations.",
    ],
  ],
  ["para", ["1. Traversal Linked list:"]],
  [
    "picture",
    ["./linkedlist/traverse linkedlist.png", "45%", "Single Linked list"],
  ],
  [
    "para",
    ["Traversing is the process of access each element in the linked list."],
  ],

  [
    "para",
    [
      "To reach any node in the list, you start from the HEAD node and move step by step. Let's use an example to understand this. In our example, the HEAD is node 10, and we want to reach the TAIL, which is node 40. We already have access to the HEAD node, so we begin by asking the current node, 'What is the next node after you?' The node's next pointer tells us address of the next node. With that information, we move to the next node, which in this case is 20. We repeat the same question, 'What is the next node after you?' and proceed to node 30.",
    ],
  ],
  [
    "para",
    [
      "By continuing this process, we eventually reach node 40. When we ask the question again at this point, 'What is the next node after you?' the answer will be null, indicating that we've reached the end of the linked list which is TAIL node. At this point, we can stop our traversal process, as we accessed all the elements along the way.",
    ],
  ],
];

export default linkedlist;
