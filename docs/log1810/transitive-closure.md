---
title: Transitive Closure
---



# Transitive Closure
*How can we make a relation transitive?*

## Mathematical Definition

$R$ is transitive if $[(a_i, a_j) \in R] \wedge [(a_j, a_k) \in R] \longrightarrow (a_i, a_k) \in R$.

## Matrix Representation

We know that the transitive closure of a relation is when each entry of the matrix squared is greater than or equal to those in the original matrix.

### Verification
For example, here is how we can verify if a relation is transitive in matrix form:
$$
M =
\begin{bmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix}
;
M^2 =
\begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix}
$$

Since each entry of $M^2$ is greater than or equal to those in $M$, the relation is transitive.

Here is a counter-example:
$$
M =
\begin{bmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
0 & 0 & 0 \\
\end{bmatrix}
;
M^2 =
\begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 0 \\
\end{bmatrix}
$$

Since the entry in the last row and last column of $M^2$ is less than the corresponding entry in $M$, the relation is not transitive.


### Filling the matrix
But here is how we can make some relation transitive in matrix form:
$$
\begin{bmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
0 & 0 & 0 \\
\end{bmatrix}
$$

We have to basically fill a direct path to all nodes reachable from a node.

This would mean in a matrix, we would fill the matrix with 1s where there is a direct path between two nodes.

Above, we have a path from B to C and from A to B, but not from A to C. So we add a direct path from A to C, giving us:

$$
\begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 0 \\
\end{bmatrix}
$$

*A trick to use to fill this up quickly is, when we are following a path, we will jump to row representing the node we are going to and reflect all that row's 1s to the row we are coming from.*

Example: If we are in row A, and we can see a one in column B, we will jump to row B and reflect all 1s in row B to row A. And we will continue this process until we have filled all the 1s as needed.

### Warshall's Algorithm

Warshall's algorithm is a method to find the transitive closure of a relation in matrix form in $O(n^3)$ time complexity.

Here is how it works:
1. Initialize the matrix with the relation.
2. For each node $k$, we will go through all the nodes $i$ and $j$ and check if there is a path from $i$ to $k$ and from $k$ to $j$. If there is, we will add a direct path from $i$ to $j$.
3. Repeat step 2 for all nodes.


```cpp
for (int k = 0; k < n; ++k) { // k is the node we are going through
    for (int i = 0; i < n; ++i) { // i is the node we are coming from
        for (int j = 0; j < n; ++j) { // j is the node we are going to
            adjMatrix[i][j] |= (adjMatrix[i][k] & adjMatrix[k][j]);
        }
    }
}
```

Here's a fun optimization we can bring in languages like C and C++ where we have bit-level privileges, let us assume we can encode each row as a single integer. We can then use bitwise operations to reflect the 1s in the row to the row we are coming from.

This would reduce the time complexity to $O(n^2)$.


```cpp
for (int k = 0; k < n; ++k) {
    for (int i = 0; i < n; ++i) {
        adjMatrix[i] |= (adjMatrix[i] & adjMatrix[k]);
    }
}
```

