---
title: Minimum Spanning Tree
---

# Minimum Spanning Tree - MST

## Definitions
- Spanning tree: Acyclical connected subgraph that contains all the nodes of the graph.
- Weight of a tree: sum of the weights of all the contained edges.
- MST: a spanning tree wherein we have the minimum weight possible

## Goal
Create a subgraph containing all the nodes with the smallest weights possible. It's to minimize the total weight unlike dijkstra which aims to minimize the distance to a target.


## Prim's Algorithm
### Goal
Prim's algorithm works by expanding the MST one node at a time, by way of the smallest weighted edge.

1. Start with one given node. Mark it as visited.
2. Look at the visited nodes' univsited neighbours, select the edge with the smallest weight and mark that node as visited.
3. Repeat step two until all the nodes are marked as visited.

### Complexity
$O(m \log n)$, where m is the number of edges and n is the number of nodes

## Kruskal's Algorithm
### Goal
Keep filling up the sorted edges until you reach an MST.

1. Start by sorting all the edges by ascending weightage.
2. Go down the list adding the edges as long as we don't achieve a cycle.

### Complexity
$O(m \log m)$, where m is the number of edges