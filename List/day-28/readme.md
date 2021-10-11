[Go to ToC](../README.md)

# Data Types

## ToC

- [Intro](#intro)
- [Data Types](#data-types)
    - [Characteristics](#characteristics)
    - [Types](#types)
- [Integers](#integers)
    - [sbyte](#sbyte)
    - [byte](#byte)
    - [short](#short)
    - [ushort](#ushort)
    - [int](#int)
    - [uint](#uint)
    - [long](#long)
    - [ulong](#ulong)


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


[🔝](#toc)  

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

[🔝](#toc)  

---

### `short`

* 16 bit signed (+/-)
* 65536 possible values (`2^16`)
* `Int16.MinValue = -32768 (-2^15)`
* `Int16.MaxValue = 32767 (2^15 -1)`
* Default value: `0`

### `ushort`

* 16 bit unsigned (+)
* 65536 possible values
* `UInt16.MinValue = 0`
* `UInt16.MaxValue = 65535 (2^16 -1)`
* Default value: `0`

[🔝](#toc)  

---

### `int`

* Most popular choice
* 32 bit signed (`+/-`)
* 4,294,967,296 possible values (2^32)
* `Int32.MinValue = -2,147,483,648 (-2^31)`
* `Int32.MaxValue = 2,147,483,647 (2^31 - 1)`
* Default value: `0`

### `uint`

* 32 bit unsigned (+)
* 4,294,967,296 possible values (2^32)
* `UInt32.MinValue = 0 (-2^31)`
* `UInt32.MaxValue = 4,294,967,295 (2^32-1).`
*  Default value is the number `0u` or `0U` (the two are equivalent). The '`u`' letter indicates that the number is of type `uint` (otherwise it is understood as int)


[🔝](#toc)  

--- 


### `long`
* 64 bit signed (`+/-`)
* 18,446,744,073,709,551,616 possible values
> eighteen quintillion ,
>four hundred forty six quadrillion ,
>seven hundred forty four trillion ,
>seventy three billion ,
>seven hundred nine million ,
>five hundred fifty one thousand ,
>six hundred sixteen
* `Int64.MinValue = -9,223,372,036,854,775,808 (-2^63)`
* `Int64.MaxValue = 9,223,372,036,854, 775,807 (2^63-1)`
* Default value of `0l` or `0L` (the two are equivalent but it is preferable to use **'L'** because the letter **'l'** is easily mistaken for the digit one **'1')**. The **'L'** letter indicates that the number is of type `long` (otherwise it is understood `int)`.


### `ulong`

* The **biggest integer type** 
* 64 bit unsigned (+)
* Default value – the number `0u`, or `0U` (the two are equivalent). The suffix **'u'** indicates that the number is of type `ulong` (otherwise it is understood as `long`).
* `UInt64.MinValue = 0`
* `UInt64.MaxValue = 18,446,744,073,709,551,615 (2^64-1).`


[🔝](#toc)  

---

## Real Floating Point

Real types in C# are the real numbers we know from mathematics. They are represented by a **floating-point** according to the standard `IEEE 754` and are **float** and **double**.