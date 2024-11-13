---
title: Collisions
---

# Collisions

## Definition
By now you've noticed that if two separate entities are hashed to the same integer value, they will want to, obviously, occupy the same index. When this happens, it's a collision.

## Goal
*How do we handle collisions, while keeping optimal hashing conditions?*

## Compression Factor
$$
F_c = \frac{n}{k}
$$
- $F_c$: Compression factor
- $n$: Occupied cells
- $k$: Total cells


If the compression factor goes up, the number of collisions (obviously) goes up as well.

## Types of resolutions:
When we need to insert an element in the table and reach a collision, we can't just omit the element, we have to find a systematic way to continue with the insertion at all costs.

### Chaining
Let us treat our cells as linked lists, this would make our table, essentially an array of linked lists. Thus, when a new element causes a collision, no problem, we still associate it to that cell, but append it to that cell's linked list.

### Probing
Instead of simply starting linked lists and adding weight to our structure (essentially storing blocks of memory everywhere), a more elegant solution is to look for the next available cell.

*But, how do we select the next available cell?*

The general form of a hashing function using probes would be:

$h_i(x) = [hashCode(x) + f_p(i)] (mod \ \ m)$

- $x$: data to be inserted
- $h_i(x)$: Insertion attempt index
- $f_p(i)$: Probing function
- $i$: Current index (that caused collision, which will be incremented)
- $m$: Table current size


There are two basic techniques:
- Linear probing
- Quadratic probing

Linear probing consists of, once a collision is found, advanced by constant increments, cell by cell until a free cell is found.

$f_p(i) = i$

For example, if our data is colliding at index 3, we advance to 4, then 5, and so forth.

Quadratic probing is the next step, instead of finding constant increments, we find increments in a quadratic function of the step.

$f_p(i) = i^2$

For example if our data collides at index 0, we go to 1, then 4, then 9, and so forth.

### Double hashing

The problem with probing functions is we usually experience heavy clustering of data inserted in the table because the offset is so heavily dependant on the step.

In this case we introduce a second hashing function:

$h_i(x) = [h_1(x) + i * h_2(x)] (mod \ \ m)$

- $h_1(x)$: Any first hashing function
- $h_2(x)$: Any second hashing function

This reduces predictable clustering, as we no longer depend on a step so closely, but we have a totally separate hashing function to calculate the offset.

## Rehashing

No matter the resolution you choose for your collisions in the hash table, your table will undoubtedly start filling up.

We want to be proactive and not reactive when it comes to space management in hashtables. 

We don't want to wait for the table to fill up to then resize, which could prove to be computationally costly at a critical juncture unnecessarily.

So we rehash the table to accomplish two things:

1. Resize the table.
2. Map the existing values to new cells in the new table (with the new size).

### Resizing

We like to keep sizes in hash tables to prime numbers, because this drastically reduces the amount of possible collisions.

So, when resizing, we find the next prime after doubling the current size.

A size of 7, then goes to 17, then 37, then 79, and so forth

### Mapping

This is basically just reinserting each element again by going through the whole process all over again.