---
title: Tree Traversal
---

# Tree Traversal

Tree traversal is the process of systematically visiting every node in a tree. 

Depending on the order in which nodes are visited, there are different types of traversals.

## Pre-order (Prefix) Traversal

In a **pre-order traversal**, the current node is visited **before** its children. The traversal order is:
1. Visit the current node.
2. Traverse the left subtree.
3. Traverse the right subtree.

### Code Example:
```java
void prefix(Node n) {
    if (n != null) {
        visit(n);
        prefix(n.left);
        prefix(n.right);
    }
}
```

## In-order (Infix) Traversal

In an **in-order traversal**, the current node is visited **in between** its left and right subtrees. For a binary tree, the traversal order is:
1. Traverse the left subtree.
2. Visit the current node.
3. Traverse the right subtree.

### Code Example:
```java
void infix(Node n) {
    if (n != null) {
        infix(n.left);
        visit(n);
        infix(n.right);
    }
}
```

## Post-order (Postfix) Traversal

In a **post-order traversal**, the current node is visited **after** all its children. The traversal order is:
1. Traverse the left subtree.
2. Traverse the right subtree.
3. Visit the current node.

### Code Example:
```java
void postfix(Node n) {
    if (n != null) {
        postfix(n.left);
        postfix(n.right);
        visit(n);
    }
}
```

---

# Syntax Trees

Syntax trees are rooted tree structures used to represent expressions, particularly in compilers and mathematical computations. For example, they help parse expressions with delimiters, following principles like BODMAS.

## Connection Between Traversals and Notations

Different tree traversals correspond to different expression notations:

- **Pre-order Traversal → Prefix Notation (Polish Notation)**  
  Example: `+ 2 * 3 4`
- **In-order Traversal → Infix Notation**  
  Example: `2 + 3 * 4`
- **Post-order Traversal → Postfix Notation (Reverse Polish Notation)**  
  Example: `2 3 4 * +`

### Why Prefix and Postfix Notations Are Cool

Non-infix notations (prefix and postfix) are **bracket-free** because their structure is inherently unambiguous.

We can use simple stack data structures in order to compute them!

---

## Evaluating Polish and Reverse Polish Notation

### Polish Notation (Prefix)
To evaluate a prefix expression:
1. Start reading **right-to-left (RtL)**.
2. Parse until you find an operator (delimiter).
3. Combine the operator with the two previous operands.

### Reverse Polish Notation (Postfix)
To evaluate a postfix expression:
1. Start reading **left-to-right (LtR)**.
2. Parse until you find an operator (delimiter).
3. Combine the operator with the two preceding operands.

---

By understanding these traversals and their connection to expression parsing, you gain a powerful toolset for compilers, interpreters, and even calculators!
