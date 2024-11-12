---
title: ArrayList
---

# ArrayList

## Goal
*Explore how a dynamic list can be implemented using arrays*

## Mechanics

As we know an array is a contiguous block of memory that can store a fixed number of elements. The elements are stored in a linear sequence and can be accessed using an index.

The downside to the array data structure is the fixed size, it has to be predefined and cannot be changed.

```java
int[] array = new int[10];
```

So if we have to create something dynamic (the list) out of something static (the array), our efforts must be concentrated on the resizing of the list (as other operations are fairly straightforward).

## Resizing the Array

The resizing of the array is fairly intuitive but expensive. We have to create a new array with a larger size, copy all the elements from the old array to the new array, and then assign the new array to the old array.

```java
int[] oldArray = new int[10];
int[] newArray = new int[20];

for (int i = 0; i < oldArray.length; i++) {
    newArray[i] = oldArray[i];
}

oldArray = newArray;
```

This operation is expensive because it has a time complexity of **O(n)** where n is the number of elements in the array.

## Interface

ArrayList implements the List interface, meaning that it provides the operations defined in the List interface "contract".

### Complexity of Operations

The complexity of operations as implemented in the ArrayList are as follows:

| Operation | Complexity | Description |
|-----------|------------|-------------|
| `add()` | **O(n)** or O(1) | We have to shift all the elements to the right in order to insert the current element, unless we are appending to the end |
| `remove()` | **O(n)** or O(1) | We have to shift all the elements to the left unless we are removing from the end of the list |
| `contains()` | **O(n)** | Iterating through the entire list to compare and find the element |
| `size()` | **O(1)** | Return the size of the list from the tracking variable |
| `get()` | **O(1)** | Get the element at a specific index |
| `set()` | **O(1)** | Set the element at a specific index |
| `isEmpty()` | **O(1)** | Check if the list is empty by checking the size variable |
| `clear()` | **O(1)** | Clear the list by setting the size variable to 0 and the array to a new array |