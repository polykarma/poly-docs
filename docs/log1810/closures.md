---
title: Relation Closures
---

# Relation Closures

## Goal
*What is the minimal number of steps to take in order to reach a certain property in a given relation?*

## Problem Statement
What happens when we have a relation, and this relation may not be transitive/reflective/symmetric? How can we make it so that it is? Furthermore, how can we make it so that it is the smallest possible relation that is transitive/reflective/symmetric?

- How many edges do we add to the graph to close a relation on a certain property?
- How many 1s do we add to the matrix to close a relation on a certain property?
- How many tuples do we add to the set to close a relation on a certain property?

## Types of closures

Let us assume the relation $R$ is defined on a set $A$ such that it contains 2-tuples $(a_i, a_j)$ where $a_i \in A$ and $a_j \in A$.

We can define the following types of closures:

- [Reflexive Closure](./reflexive-closure.md): A relation is reflexive if it contains all the pairs $(a_i, a_i)$ for all $a_i \in A$.
- [Symmetric Closure](./symmetric-closure.md): A relation is symmetric if it contains all the pairs $(a_i, a_j)$ for all $(a_j, a_i)$.
- [Transitive Closure](./transitive-closure.md): A relation is transitive if it contains all the pairs $(a_i, a_k)$ for all $(a_i, a_j)$ and $(a_j, a_k)$.
- **Equivalence Closure**: A relation is an equivalence relation if it is reflexive, symmetric, and transitive.