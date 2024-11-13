---
title: Bubble Sort
---

# Bubble Sort

## Strategy
### *Biggest elements bubble up to the end*

At each iteration, swap the current element with the adjacent (to the right) element if the latter is smaller.

The swapping continues until that element can progress no further (the right neighbor is bigger), at which point we go to the next iteration.

## Complexity Analysis

### Worst case
This case would ensure that every single comparison would end in a swap.

Total number of swaps:

$ \sum_{n=1}^{\infty} 2^{-n} = 1$

### Best case

We can actually optimize the algorithm to break the iteration every time we reach a point of no-swap. This would mean a single swap to ensure everything is in order.

This means: $\Omega(n)$

If we didn't exit directly, and kept on checking for swaps it would be $\Omega(n^2)$