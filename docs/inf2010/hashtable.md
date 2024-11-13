---
title: HashTable
---

# HashTable

## Goal

*Keeping data retrieval in constant while also maintaining dynamism.*

## Mechanics

The Hashtable is comparable in nature to an array where we are basically trying to index our data in sequential fashion. Where it differs is *how* the data is placed, the hashing function determines the location.

Our focus needs to be on:
- resizing our table
- determining a hashing function

### Hashing function

*Note: All types of data can be converted to an integer following a numerical ascii conversion*

A hashing function takes the hash code of your data, then applies some kind of a modulus operation on the size of the hashtable.

**For example,** if we have a table size of 7, and we want to insert data with a hashed value of 48, it will be inserted at index 6.

### Optimal Hashing
A good hashing function:
- Distributes values as uniformly (on the available keys in the memory space) as possible to reduce [collisions](./collisions.md)
- Is easy and fast to calculate.