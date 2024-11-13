---
title: sorting
---

# Sorting Algorithms

A lot of problems deal with search for data within a structure. Logically, it is drastically easier to deal with a sorted structure.

## Goal

*The name of the game is then to formulate the most efficient sorting algorithm.*

## Some basic algorithms

- [Selection Sort](./selection.md)
- [Bubble Sort](./bubble.md)
- [Insertion Sort](./insertion.md)
- [Merge Sort](./merge.md)
- [Quick Sort](./quick.md)

## Best, Average, and Worst case

When analyzing the complexity of sorting algorithms and talking about lists, we have to cover all the cases of usage of the algorithm on the list.

- Best case: The list is pre-sorted before applying the sorting algorithm
- Average case: The list is unsorted.
- Worst case: The list is so unsorted it is in the inverse sorted direction from what we wish to achieve. (If we aim to sort in increasing order, the worst case would be that the list is in decreasing order)