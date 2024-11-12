---
title: Lists
---

# Lists

## Goal
*Provide a simple, intuitive, and versatile linear data structure*

Lists are an intuitive linear data structure that can be used to store a collection of elements.

Even though we won't be concerned about the actually memory location storage of the nodes in the list in the context of this course, it is satisfactory to know that the elements are logically accessible in a linear sequence.


## Interface

A generally accepted interface for a list is as follows:

```java
public interface List<T> {
    // Add an element to the list at a specific index
    void add(int index, T element);
    // Remove an element from the list
    void remove(T element);
    // Check if the list contains an element
    boolean contains(T element);
    // Return the size of the list
    int size();
    // Get the element at a specific index
    T get(int index);
    // Set the element at a specific index
    T set(int index, T element);
    // Check if the list is empty
    boolean isEmpty();
    // Clear the list
    void clear();
}
```

## Implementations

There are two widely used implementations of lists:
- ArrayList (Based on the array data structure)
- LinkedList (Based on a data structure where each element points to the next element)

We will explore these implementations in the following sections.