const stackandqueue = [
  ["tittle", ["Stack and Queue ", "30 Aug 2023"]],
  [
    "para",
    [
      "In this blog, I want to let you know that I won't be including any code. My intention is to concentrate on providing a clear explanation of concepts and ideas.",
    ],
  ],
  ["heading", ["Stacks"]],
  [
    "para",
    [
      "Stacks are linear data structure and elements can be accessed sequentially unlike lists or arrays in which elements can be accessed using index. Stacks follow LIFO(Last-In-First-Out) mechanism, which means that the last element which enters the stack will leave the stack first. Stack container can be implemented using Arrays or linked list. The data type of the elements in the stack should be same.",
    ],
  ],
  ["underline", ["Stack can be implemented in two ways: "]],
  [
    "para",
    [
      "Stacks can be implemented in static way using Arrays. In static implementation, the size of the stack will be fixed.",
    ],
  ],
  [
    "para",
    [
      "Stack can be also implemented in dynamic way using Linked list. In the dynamic implementation, the size of the stack is not fixed.",
    ],
  ],
  ["heading1", ["Operations on Stack"]],
  ["picture", ["./stackandqueue/stack.png", "55%", "Stack"]],
  ["para", ["Stacks have two operations, push, pop, and top operations."]],
  ["underline", ["1. Top (Peek) Operation:"]],
  [
    "para",
    [
      "Top operation return the top or last entered element in the stack. If the stack is empty then Top operation will return null.",
    ],
  ],
  ["underline", ["2. Push Operation:"]],
  [
    "para",
    [
      "Push operation takes an element as input and add the element to the top of the stack. In the above image, left side of the figure shows the implementation of PUSH operation.",
    ],
  ],
  ["underline", ["3. Pop Operation:"]],
  [
    "para",
    [
      "Pop operation removes the Top element or the recently entered element in the stack. The stack must be non-empty to perform this operation.",
    ],
  ],
  [
    "para",
    ["All the above operations can be completed in O(1) time complexity"],
  ],
  ["heading1", ["Applications of Stack"]],
  ["para", [" 1. For implementing backtracking."]],
  ["para", [" 2. Expression evaluation."]],
  ["para", [" 3. Undo and redo."]],
  ["para", ["4. Memory management."]],
  ["para", ["5. To perform depth first search."]],

  ["heading", ["Queues"]],
  [
    "para",
    [
      "Queues are also linear data structure with sequential access. Queues follow FIFO(First-In-First-Out) mechanism, which means the first element which entered the queue will be removed first.",
    ],
  ],
  [
    "para",
    [
      "Queues can also be implemented in statically using arrays and dynamically using linked lists.",
    ],
  ],
  [
    "para",
    [
      "Queues is open at the both the ends. Beginning of the queue is called as FRONT and end of the queue is called as REAR.",
    ],
  ],
  ["picture", ["./stackandqueue/queue.png", "80%", "Queue"]],
  ["heading1", ["Operations on Queue"]],
  [
    "para",
    [
      "Basic operations on Queue are enqueue, dequeue, peek, isFull and isEmpty:",
    ],
  ],
  ["underline", ["1. enqueue:"]],
  [
    "para",
    [
      "This operation takes an element as input and inserts the element from the rear-end.",
    ],
  ],
  ["underline", ["2. dequeue:"]],
  [
    "para",
    [
      "This operation removes an element from the FRONT-end of the queue. To perform this operation the queue should be non-empty.",
    ],
  ],
  ["underline", ["3. peek"]],
  ["para", ["Peek operation returns the front most element of the Queue."]],
  ["underline", ["4. isFull"]],
  [
    "para",
    [
      "isFull operations check if the stack is full or not. This operation is not applicable if the Queue is implemented dynamically.",
    ],
  ],
  ["underline", ["4. isEmpty"]],
  [
    "para",
    [
      "isEmpty operation return true if the Queue is empty and false if the queue contains elements.",
    ],
  ],
  ["heading1", ["Applications of Queue"]],
  ["para", ["1. To perform BFS (Breadth first search)."]],
  ["para", ["2. Job scheduling."]],
  ["para", ["3. Networking."]],

  ["heading", ["Stack vs Queue"]],
  ["para", ["1. Stack follows LIFO and Queues follow FIFO."]],
  [
    "para",
    [
      "2. In stack elements are inserted and removed from the same end. In queues the elements are inserted and removed from two different ends.",
    ],
  ],
  [
    "para",
    [
      "3. Stack have only one pointer TOP wherease Queue has two pointers FRONT and REAR.",
    ],
  ],
];

export default stackandqueue;
