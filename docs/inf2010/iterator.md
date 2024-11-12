---
title: Iterator
---

# Iterator

## Goal

*To provide a way to access the elements of a Collection object sequentially*

## Description

The iterator design pattern allows us to access the elements of a collection object sequentially without exposing its underlying representation.

For example, we can use an iterator to traverse a list with a for-loop as well as a tree structure.

## Interface

The iterator interface is as follows:

```java
public interface Iterator<T> {
    boolean hasNext();
    T next();
    void remove();
}
```

- `hasNext()`: Returns true if there are more elements in the collection by checking the current position of the iterator.
- `next()`: Returns the next element in the collection and advances the iterator.
- `remove()`: Removes the last element returned by the iterator from the collection.

This allows us to use the iterator in a while-loop:

```java
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    System.out.println(s);
}
```

or a for-each loop:

```java
for (String s : list) {
    System.out.println(s);
}
```

## Simplifying the complexity of operations

We can notice that the iterator keeps track of the current element, so if we were to remove an element, so once the iterator is pointing to the element we want to remove, we can just call `remove()` to remove the element from the collection. This simplifies the complexity of removing elements from a collection without having to retraverse the collection to find the element to remove.


## Complexity of Operations

| Operation | Complexity | Description |
|-----------|------------|-------------|
| `hasNext()` | O(1) | Returns true if there are more elements in the collection |
| `next()` | O(1) | Returns the next element in the collection |
| `remove()` | O(1) | Removes the last element returned by the iterator from the collection |