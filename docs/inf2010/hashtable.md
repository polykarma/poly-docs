---
title: HashTable
---

# HashTable

## Problem

Arrays and LinkedLists are not always the most efficient for storing and retrieving data in specific cases. 

For example if we had unlimited time then perhaps we could do a sequential search to find an element in a list. If we had unlimited memory then perhaps we could store all the elements in an array. 

However, in the real world we have to make trade-offs between time and space. The hashtable is situated in the middle of these two extremes. It is a data structure that allows us to store and retrieve data in a more efficient manner than a list or an array.

## Goal

*Explore how a hash table correlates data to placement*

## Mechanics

A hashtable works by simply converting the data we are handling into the position where it should be stored. This is done by using a hash function.

A hash function is a function that takes an input (or key) and returns a unique output (or hash). This hash is then used to determine the position of the data in the hashtable.

Usually for alphanumeric elements, we use the combination of the ASCII values of the characters in the key to generate the hash. This is a simple hash function that is easy to implement.

We then take that integer key and use it to determine the position of the data in the hashtable by using modulo.

## Analogy

A hashtable can be visualized as a library. When you want to find a book in a library, you don't search through every book in the library. Instead, you check the author's name, the title of the book, or the ISBN number. This information is used to determine the location of the book in the library.

