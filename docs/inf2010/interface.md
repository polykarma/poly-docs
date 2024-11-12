---
title: Interface vs Data Structure
---

# Interface vs Data Structure


## Interface
An interface can be thought of as a contract on the different ways to interact with a data structure without worrying too much about the implementation details.

It's like a blueprint of the operations you can perform on a data structure.

It answers the question: *What can I do with this data structure?*

For example, the following is a simple interface for a Node:
    
```java
public interface NodeInterface<T extends Comparable<T>> extends Serializable, Cloneable {
    T getValue();
    void setValue(T value);
    Node<T> getNext();
    void setNext(Node<T> next);
}
```

This interface defines the operations that can be performed on a Node. It doesn't specify how the operations are implemented, just what operations are available.

The operations available are:
- `getValue()`: Get the value of the node
- `setValue(T value)`: Set the value of the node
- `getNext()`: Get the next node
- `setNext(Node<T> next)`: Set the next node

As we can see we are completely decoupled from the type this Node can carry. With the power of generics, we can create a Node that can carry any type of data. The `T` in the interface is a placeholder for the type of data that the Node will carry.

---

## Data Structure

A data structure, on the other hand, is a concrete implementation of a data structure. It's the actual mechanics of how the data is stored and manipulated in order to fulfill the contract of the interface.

It answers the question: *How can I do this operation on this data structure?*

For example, the following is a simple implementation of a Node that implements the `Node` interface:

```java
public class MyNodeImplementation<T> implements Node<T> {
    private T value;
    private Node<T> next;

    public NodeImpl(T value) {
        this.value = value;
        this.next = null;
    }

    @Override
    public T getValue() {
        return this.value;
    }

    @Override
    public void setValue(T value) {
        this.value = value;
    }

    @Override
    public Node<T> getNext() {
        return this.next;
    }

    @Override
    public void setNext(Node<T> next) {
        this.next = next;
    }
}
```

This implementation provides the actual mechanics of how the operations defined in the interface are carried out. It specifies how the value is stored, how the next node is linked, and how the operations are performed.

This was a very simple example, but the same principle applies to more complex data structures like lists, trees, graphs, etc.