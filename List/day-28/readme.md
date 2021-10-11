[Go to ToC](../README.md)

# Data Types

## ToC

- [Intro](#intro)
- [Data Types](#data-types)
    - [Types](#types)
- [Integers](#integers)

## Intro

In this lesson, we'll cover C# **primitive data types** and how to work with them. Examples of primitive data types are : integer, real types with floating-point, Boolean, character, string and object type. They are divided into two major sets: **value types** and **reference types**.

[🔝](#toc)

## Data Types

**Data types** are sets (ranges) of values that have similar characteristics. For instance **byte** type specifies the set of integers in the range of [0 ... 255]

[🔝](#toc) 

### Characteristics

Data Types are characterized by:

- **Name** - for example **int**
- **Size** - for example **4 bytes**
- **Default value** - for example **0**


[🔝](#toc)  

### Types

Basic data types in C# are distributed into the following **types**:
- Integer types – **sbyte, byte, short, ushort, int, uint, long, ulong**;
- Real floating-point types – **float, double**;
- Real type with decimal precision – **decimal**;
- Boolean type – **bool**;
- Character type – **char**;
- String – **string**;
- Object type – **object**.
These data types are called **primitive (built-in types)**, because they are embedded in C# language at the lowest level. The table below represents the above mentioned data types, their range and their default values:


## Integers

Integer types represent integer numbers and are **sbyte, byte, short, ushort, int, uint, long and ulong**. Let’s examine them one by one.

---
### `sbyte`

* 8 bit signed (+/-)
* Means 2 to the power of 8 = 256 values
* `SByte.MinValue = -128 (-2^7)`
* `SByte.MaxValue = 127 (2^7 - 1) `
* Default value: `0`

### `byte`

* 8 bit **unsigned** ( + )
* 256 possible values (`2^8`)
* `Byte.MinValue = 0`
* `Byte.MaxValue = 255 (2^8 - 1)`
* Default value: `0`

---

### `short`

* 16 bit signed (+/-)
* 65536 possible values (`2^16`)
* `Int16.MinValue = -32768 (-2^15)`
* `Int16.MaxValue = 32767 (2^15 -1)`

### `ushort`

* 16 bit unsigned (+)
* 65536 possible values
* `UInt16.MinValue = 0`
* `UInt16.MaxValue = 65535 (2^16 -1)`

---

### `int`

* Most popular choice
* 32 bit signed (`+/-`)
* 4,294,967,296 possible values (2^32)
* 