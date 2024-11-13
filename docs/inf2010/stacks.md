---
title: Stacks
---

# Stacks

## Goal

*What if we need a List with a very specific access policy?*

## Mechanics

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first element to be removed.

In most cases the stack tracks only the top element of the stack, which is why we can only add or remove elements from the top of the stack. Some implementations may track the base of the stack as well (such as in assembly language programming).

## Analogy

A stack can be visualized as a stack of plates where we can only add or remove plates from the top of the stack. This is why the last plate added is the first plate to be removed.

## Complexity of Operations

| Operation | Complexity | Description |
|-----------|------------|-------------|
| `push()` | O(1) | Adds an element to the top of the stack |
| `pop()` | O(1) | Removes and returns the element at the top of the stack |
| `peek()` | O(1) | Returns the element at the top of the stack without removing it |

## Use Cases

Stacks are used in many applications such as:

- Function call management in programming languages.
- Postfix or prefix expression evaluation.