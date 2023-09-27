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
  ["heading1", ["Traversing a Linked list:"]],
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
  ["heading1", ["Insertion in a linked list: "]],
  [
    "para",
    [
      "In linked list to insert an node in Beginning, middle and at last, we will be using slighty different approach.",
    ],
  ],
  ["underline", ["a. Insertion at Beginning: "]],
  [
    "picture",
    ["./linkedlist/insertionatB.png", "80%", "Insertion at beginning"],
  ],
  [
    "para",
    [
      "First, create a newNode with the new data and set the 'next' pointer to null. Next, update the 'next' pointer with the address of the HEAD node in the existing linked list. Logically, the newNode now becomes the first node in the linked list, so we need to update the HEAD pointer to point to the newNode. That's all it takes to insert a node at the beginning of the linked list.",
    ],
  ],

  ["underline", ["b. Insertion at end: "]],
  ["picture", ["./linkedlist/insertionatE.png", "80%", "Insertion at end"]],
  [
    "para",
    [
      "Create a newNode with the new data, and point the TAIL node's next pointer to the newNode. This sounds easy right? Yes, But with a small twist. We will not be able access the last element directly, so we need to traversing technique explained above to move to the TAIL node or last node.",
    ],
  ],
  [
    "para",
    [
      "**POINT TO REMEMBER** Except HEAD node, we will not be able to access any node directly like in Arrays or list. To access any element in the Linked list we need to traverse to the node.",
    ],
  ],
  ["underline", ["c. Insertion at Middle: "]],
  ["picture", ["./linkedlist/insertionatC.png", "80%", "Insertion at middle"]],
  [
    "para",
    [
      "First create a newNode with the new data. Now traverse to the previous position of our desired position. For example if we want to go to position 3, then traverse till position 2.",
    ],
  ],
  [
    "para",
    [
      "Now, let's point the 'next' pointer of 'newNode' to the next element of the node at position 2, which is the node at position 3. Both 'newNode' and the node at position 2 are now pointing their 'next' pointers to the node at position 3. Finally, update the 'next' pointer of the node at position 2 with the address of 'newNode.' With these steps, we have successfully added a new element at position 3.",
    ],
  ],

  ["heading1", ["Deletion in a Linked list:"]],
  [
    "para",
    [
      "Similar to insertion, Deletion also have slightly different approach for Deletion at beginning, end, and middle.",
    ],
  ],
  ["underline", ["a. Deletion at beginning:"]],
  [
    "picture",
    ["./linkedlist/deletionB.png", "80%", "Deletion at the Beginning"],
  ],

  [
    "para",
    [
      "As previously mentioned, we can directly access the HEAD node, eliminating the need for traversal to access the first element of the linked list.",
    ],
  ],
  [
    "para",
    [
      "Update the HEAD pointer to point to the next node after the original first node. Then, set the NEXT pointer of the original first node to null.",
    ],
  ],
  [
    "para",
    [
      "Now, the original first node is disconnected from the linked list, and the HEAD pointer points to the new first node of the linked list.",
    ],
  ],
  [
    "para",
    [
      "If we remove the first element from a linked list with a size of 1 (one), the HEAD pointer will point to NULL after the removal, indicating that the linked list is empty.",
    ],
  ],

  ["underline", ["b. Deletion at end:"]],
  ["picture", ["./linkedlist/deletionE.png", "80%", "Deletion at the end"]],
  [
    "para",
    [
      "To delete the last node in the linked list, traverse to the second-to-last node. Then, change the NEXT pointer of the second-to-last node to NULL. This action effectively removes the connection of the last node from the linked list.",
    ],
  ],
  ["underline", ["c. Deletion at Middle:"]],
  ["picture", ["./linkedlist/deletionM.png", "70%", "Deletion at the Middle"]],
  [
    "para",
    [
      "Deleting a node from a specific position is tricky. We will be using two pointer for this deletion. One will on the node which we need to delete and another one will be on the previous node of the deletion node.",
    ],
  ],
  [
    "para",
    [
      "In the above image, ptr is pointing to the deletion node and ptr1 is pointing to the previous node.",
    ],
  ],
  [
    "para",
    [
      "First we the update the next pointer of the 'ptr1' with the next pointer value of the 'ptr'. We made a new link as specified in the image.",
    ],
  ],
  [
    "para",
    [
      " Now we need to remove the 'ptr' node completely from the linked list. So, we need to change the next pointer value of the 'ptr' node to NULL. This will remove the node from the linked list.",
    ],
  ],
];

export default linkedlist;
