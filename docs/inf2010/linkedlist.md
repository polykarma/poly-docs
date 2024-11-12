---
title: LinkedList
---

# LinkedList

## Goal
*Explore how a dynamic list can be implemented using a linked structure*

## Mechanics

A linked list is a linear data structure where each node contains a reference to the next node in the list. This allows for dynamic resizing of the list as the nodes can be added or removed without the need to resize the list like in an array. 

This also means our efforts must be concentrated on the traversal of the list (as other operations are fairly straightforward) as well as the management of the references between the nodes.

The first node is called the head and the last node is called the tail. The tail node points to null to indicate the end of the list.

## Traversal

Traversing a linked list is done by starting at the head node and following the references to the next node until we reach the end of the list (when the reference is null).

Example of traversing a linked list:

```java
Node<T> current = head;
while (current != null) {
    // Do something with the current node
    current = current.getNext();
}
```

## Rerouting References

When adding or removing a node from a linked list, we have to reroute the references between the nodes to maintain the integrity of the list.

For example let us take the following list:

```
1 -> 2 -> 4 -> null
head: 1
tail: 4
```

If we want to insert the value 3 between 2 and 4, we have to reroute the references as follows:
1. Create a new node with the value 3
2. Set the next reference of 3 to 4 (but now we have two references to 4)
3. Set the next reference of 2 to 3
    
```
1 -> 2 -> 3 -> 4 -> null
```

Let us now remove the value 3 from the list to demonstrate rerouting references when removing a node:
1. Set the next reference of 2 to 4

```
1 -> 2 -> 4 -> null
```

Now if we are dealing with a doubly linked list, our process gets a little more complicated as we have to manage the references in both directions, as follows:

```
1 <-> 2 <-> 4 -> null
head: 1
tail: 4
```

If we want to insert the value 3 between 2 and 4, we have to reroute the references as follows:
1. Create a new node with the value 3
2. Set the next reference of 3 to 4
3. Set the previous reference of 3 to 2
4. Set the next reference of 2 to 3
5. Set the previous reference of 4 to 3

```
1 <-> 2 <-> 3 <-> 4 -> null
```

Let us now remove the value 3 from the list to demonstrate rerouting references when removing a node:
1. Set the next reference of 2 to 4
2. Set the previous reference of 4 to 2

```
1 <-> 2 <-> 4 -> null
```

As you can notice we are never actually deleting the node from memory, we are just rerouting the references to exclude it from the list. The garbage collector will take care of the rest in java.

You'll also notice that unlike the array implementation, we don't have to shift any elements around when adding or removing nodes from the list. This is because we are just rerouting the references between the nodes. We really don't care about the physical location of the nodes in memory, just the logical sequence of the nodes. We also really don't care about the size of the list, as we just play around with the references between the nodes.

### What happens if we remove the head or tail node?

If we remove the head node, we have to set the head reference to the next node in the list. If we remove the tail node, we have to set the tail reference to the previous node in the list.

For example, if we remove the head node from the list:
1. Set the head reference to the next node in the list

```
2 -> 4 -> null
head: 2
tail: 4
```

If we remove the tail node from the list:
1. Set the tail reference to the previous node in the list

```
2 -> null
head: 2
tail: 2
```

## Interface

LinkedList implements the List interface, meaning that it provides the operations defined in the List interface "contract".

## Complexity of Operations

| Operation | Complexity | Description |
|-----------|------------|-------------|
| `add()` | **O(n)** or O(1) | We have to traverse the list to find the index to insert the element, unless we are appending to the end |
| `remove()` | **O(n)** or O(1) | We have to traverse the list to find the element to remove, unless we are removing from the end of the list |
| `contains()` | **O(n)** | Iterating through the entire list to compare and find the element |
| `size()` | **O(1)** | Return the size of the list from the tracking variable |
| `get()` | **O(n)** | Traverse the list to find the element at a specific index |
| `set()` | **O(n)** | Traverse the list to find the element at a specific index and set it |
| `isEmpty()` | **O(1)** | Check if the list is empty by checking the size variable |
| `clear()` | **O(1)** | Clear the list by setting the size variable to 0 and the head to null |
