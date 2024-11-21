---
title: Trees
---

# Trees

## Definitions
- Tree: An acyclic connected graph.
- Acyclic: There are no paths such that the first and last vertex are the same.
- Connected: There exists a path between any two vertices of the graph.
- Rooted tree: a node is designated as the root, and there is a unique path to any other node
- Arborescence: *Directed* rooted tree, where there is a unique directed path from the root to any other node
- Parent-child: a vertex $u$ is the parent of $v$ be if there is a directed edge such that: $u \longrightarrow v$.
- Ancestor-descendant: We can designate by ancestor any node on the path from the root to a chosen node. Likewise a descendant of a node is any node that has the former node as an ancestor.
- Leaf: a child-less node is a leaf, usually at the tip ends of a rooted tree.
- Sub-tree: The sub-graph rendered when choosing a specific node as the root. Basically that node and it's descendants.
- Internal node: Any non-leaf node.
- Siblings: Any node with the same parent.
- $M$-ary Tree: is when each node as no more than $m$ children.
- Full $M$-ary Tree: when each internal node has *exactly* $m$ children.
- Binary tree: $M$-ary tree where $m = 2$.
- Full binary tree: Full $M$-ary tree where $m=2$
- Ordered rooted tree: When we have a rooted tree wherein all the children of internal nodes are placed in a specific order, (for example alphabets or numbers in ascending order).
- Levels: The level of a vertex is the length of the unique path that takes it to the root in a rooted tree. *Note: The root is level 0*.
- Height: Maximum level of a rooted tree.
- Balanced m-ary tree: this is when we have height $h$ and all leafs are in the level range $[h-1, h]$. *Trick: If there exists a difference of 2 or more between the levels of two leaves, it is unbalanced*


## Tree properties

### Theorem of n-1 edges
A tree with $n$ nodes has $n-1$ edges.

*Intuitively this makes sense when you realise you don't have dangling edges.* 

*Furthermore if we think of the edge leading to a certain node as belonging to it, we realize that all nodes have an edge that belongs to it except for the root, hence the n to n-1 theorem stands.*

We can prove this with induction in a more mathematical way of explaining what I just wrote above by saying that:

Base case: $n=1$, there is only one node, and there are $0$ edges, so the theorem stands.

Inductive step: Let us assume that any tree with k nodes has k - 1 edges.

Let us assume that our tree T has k+1 nodes and that v is a leaf node. Let w be the parent node of v.

Let us then delete node v, this means the edge between w and v is also deleted. We now have k nodes and k - 1 edges. Because we know that T has one more edge than currently, we know that T has k edges.

### Theorem of m-ary nodes
An $M$-ary tree with $i$ internal nodes has $m \times i + 1$ nodes.

Since this is an $M$-ary tree (every internal node has m children), and we have $i$ internal nodes, we have $m*i$ children to each internal node. The root node is left since it isn't the child of anything.

Because all nodes are either internal or leafs we know $n = i + l$.

We can combine the two equations to get
$$
\begin{align}
n = m \times i + 1
\\
n = i + l
\\
\therefore\ \ 
i + l = m \times i + 1
\\
l = m \times i - i + 1
\\
l = (m \times i) + (-1 \times i) + 1
\\
\therefore \ \ l = i \times (m - 1) + 1
\end{align}
$$


### Inferences

Let us have a full $M$-ary tree wherein:
- $i$: number of internal nodes
- $l$: number of leaf nodes
- $n$: number of total nodes
- $n-1$: number of total edges

We can actually infer all the other variables simply with the presence of one.

Let $i$ be known:
If we know the number of internal nodes, and we obviously know $m$, we can infer the rest with the following equations:
- $n = m \times i + 1$
- $l = i \times (m - 1) + 1$
- $n = i + l$