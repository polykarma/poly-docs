---
title: Queues
---

# Queue

## Goal

*What if we need a List with a very specific access policy?*

## Mechanics

Once again a queue is an implementation of a List, but with a FIFO policy. This means that the first element that is added to the queue is the first one to be removed.

## Analogy

A queue can be visualized as a line of people waiting to buy tickets. The first person in line is the first person to be served.

## Complexity of Operations

| Operation | Complexity | Description |
|-----------|------------|-------------|
| `enqueue()` | O(1) | Adds an element to the back of the queue |
| `dequeue()` | O(1) | Removes and returns the element at the front of the queue |
| `peek()` | O(1) | Returns the element at the front of the queue without removing it |

## Use Cases

Queues are used in many applications such as:
- Task scheduling in operating systems.
- Kafka streams in distributed systems.
- CI/CD pipelines in software development.