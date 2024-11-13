---
title: Iterator
---

# Iterator

## Goal

*To provide a way to access the elements of a Collection sequentially*

## Description

The iterator design pattern allows us to access the elements of a collection object sequentially without exposing its underlying representation. We can then implement a custom traversal technique for each collection.

For example, we can use an iterator to traverse a list with a for-each loop as well as a tree structure.

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


## LinkedList with vs without Iterator
Without an implementation of an iterator, a linkedlist must be traversed node-by-node with a traversal in order to find the right index, then to remove the node must perform a second pass in order to find the node again to remove. This is quadratic time.

We can optimize this by keeping track of the node during the traversal itself with the iterator. In this case we stay in linear time.