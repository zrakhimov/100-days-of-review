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
    - [Examples](#examples)
- [Real Floating Point](#real-floating-point)
    - [Float](#float)
    - [Special Values of Float](#special-values-of-float)
    - [Double](#double)
    - [Special Values of Double](#special-values-of-double)
    - [Errors with Real Numbers](#errors-with-real-numbers)
    - [Decimal](#decimal)



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

### Examples

```C#
// Declare some variables 
byte centuries = 20; 
ushort years = 2000; 
uint days = 730480; 
ulong hours = 17531520; /
// Print the result on the console
Console.WriteLine(centuries + " centuries are " + years + " years, or " + days + " days, or " + hours + " hours.");
// Console output: 
// 20 centuries are 2000 years, or 730480 days, or 17531520 
// hours.
ulong maxIntValue = UInt64.MaxValue; Console.WriteLine(maxIntValue); 
// 18446744073709551615
```

---

## Real Floating Point

Real types in C# are the real numbers we know from mathematics. They are represented by a **floating-point** according to the standard `IEEE 754` and are **float** and **double**.

### `float`

* 32 bit (single precision real number)
* Default value: `0.0f or 0.0F`. The character 'f' when put at the end explicitly indicates that the number is of type `float` (because by default all real numbers are considered **double**)
* Accuracy/Precision up to **seven** **decimal** places (the others are lost).
For example: **0.123456789** => becomes **0.1234568**
* Range: `±1.5 × 10^-45 to ±3.4 × 10^38`

### Special Values of Float

* The real data types have also several special values that are not real numbers but are mathematical abstractions:
    - **Negative infinity** **-∞ (`Single.NegativeInfinity`)**. It is obtained when for instance we are dividing `-1.0f by 0.0f`.
    - **Positive infinity** **+∞ (`Single.PositiveInfinity`)**. It is obtained when for instance we are dividing `1.0f` `by` `0.0f`.
    - **Uncertainty (`Single.NaN`)** – means that an invalid operation is performed on real numbers. It is obtained when for example we divide `0.0f by 0.0f`, as well as when calculating square root of a negative number.

[🔝](#toc) 
---
### `double`

* 64 bit (double precision real number)
* Default value: `0.0d or 0.0D` (the suffix `'d'` is not mandatory because by default all real numbers in C# are of type `double`)
* Accuracy/Precision up to **fourteen or fifteen** decimal places.
* Range: `±5.0 × 10^-324 to ±1.7 × 10^308`

[🔝](#toc) 

### Special Values of Double

- `Double.PositiveInfinity` (+∞)
- `Double.NegativeInfinity` (-∞)
- `Double.NaN` (invalid number)


[🔝](#toc) 

### Real Numbers - Example

```c#
float floatPI = 3.14f; 
Console.WriteLine(floatPI); // 3.14
double doublePI = 3.14; 
Console.WriteLine(doublePI); // 3.14
double nan = Double.NaN; 
Console.WriteLine(nan); // NaN 
double infinity = Double.PositiveInfinity; 
Console.WriteLine(infinity); // Infinity
```

### Errors with Real Numbers

In calculations with real floating-point data types it is possible to observe **strange behavior**, because during the representation of a given real number it often happens to **lose accuracy**

* Examples of numbers that do not have an accurate representation in float and double types are for instance` 0.1, 1/3, 2/7` and other.


```C#
float f = 0.1f; 
Console.WriteLine(f); // 0.1 (correct due to rounding) 
double d = 0.1f; 
Console.WriteLine(d); // 0.100000001490116 (incorrect)
float ff = 1.0f / 3; 
Console.WriteLine(ff); // 0.3333333 (correct due to rounding) 
double dd = ff; 
Console.WriteLine(dd); // 0.333333343267441 (incorrect)
```

[🔝](#toc) 

### `decimal`

The above example show that f**loating-point number arithmetic can produce mistakes**, and is therefore not appropriate for precise financial calculations. Fortunately, C# supports decimal precision arithmetic where numbers like 0.1 are presented in the memory without rounding.

C# supports the so-called **decimal floating-point arithmetic**, where numbers are represented via the decimal numeral system rather than the binary one. Thus, the decimal floating point-arithmetic type in C# **does not lose accuracy** when storing and processing floating-point numbers.

* Perfect for **financial** calculations
* 128 bit
* Precision: 28 to 29 decimal places
* Range: `-7.9x10^28 ~ +7.9x10^28
* Default Value: `0.0m or 0.0M`. The '`m`' character at the end indicates explicitly that the number is of type decimal (because by default all real numbers are of type `double`).

⚠️ If you perform calculations with money use the decimal type instead of float or double. Otherwise, you may encounter unpleasant anomalies while calculating and errors as a result!


[🔝](#toc) 



## Boolean

* Boolean type is declared with the keyword `bool`
* It has two possible values: `true` and `false`
* It is used most often to store the calculation result of **logical expressions**

```C#
int a = 1; 
int b = 2; 
// Which one is greater? 
bool greaterAB = (a > b); 
// Is 'a' equal to 1? 
bool equalA1 = (a == 1); 
// Print the results on the console 
if (greaterAB) 
{ 
    Console.WriteLine("A > B"); 
} else 
{ 
    Console.WriteLine("A <= B"); 
}

Console.WriteLine("greaterAB = " + greaterAB); 
Console.WriteLine("equalA1 = " + equalA1);
// Console output: 
// A <= B 
// greaterAB = False 
// equalA1 = True
```


## Character Type

* Character type is a **single character**. It is declared in C# with the keyword `char`
* 16 bit - (Unicode = UTF-16)
* Smallest value: `0` (`'\u0000'`)
* Largest value: `65535` (`'\uffff'`)
* Default Value: '\u0000'

```C#

char ch = 'a';
Console.WriteLine( "The code of '" + ch + "' is: " + (int)ch);

ch = 'b'
Console.WriteLine( "The code of '" + ch + "' is: " + (int)ch); 

ch = 'A';
Console.WriteLine( "The code of '" + ch + "' is: " + (int)ch); 

// Console output: 
// The code of 'a' is: 97 
// The code of 'b' is: 98 
// The code of 'A' is: 65
```

## Strings

* Strings are sequences of characters. 
* In C# they are declared by the keyword `string`.
* Default Value = `null`

```c#
string firstName = "John"; 
string lastName = "Smith"; 
string fullName = firstName + " " + lastName;

Console.WriteLine("Hello, " + firstName + "!"); 
Console.WriteLine("Your full name is " + fullName + ".");

// Console output: 
// Hello, John! 
// Your full name is John Smith.
```

## Object Type

* Object type is a special type, which is the parent of all other types in the .NET Framework.
* Declared with the keyword `object`, it can take values from **any other type**
* Default Value: `null`

```C#
// Declare some variables 
object container1 = 5; 
object container2 = "Five";
// Print the results on the console 
Console.WriteLine("The value of container1 is: " + container1); 
Console.WriteLine("The value of container2 is: " + container2);
// Console output: 
// The value of container1 is: 5 
// The value of container2 is: Five.
```

## Nullable Types


* Nullable types are specific **wrappers** around the value types (as `int`, `double` and `bool`) that allow storing data with a **null** value
* This provides opportunity for types that generally do not allow lack of value (i.e. value null) to be used as reference types and to accept both normal values and the special one null.

Wrapping a given type as nullable can be done in two ways:
```c#

Nullable<int> i1 = null; 
int? i2 = i1;

/* Both are equivalent. The easiest way to perform this operation is to add a question mark (?) after the type, for example int?, the more difficult is to use the Nullable<…> syntax. */
```

* Nullable types are **reference types** i.e. they are reference to an object in the dynamic memory, which contains their actual value. They may or may not have a value and can be used as normal primitive data types, but with some specifics, which are illustrated in the following exam
``` C#
int i = 5; 
int? ni = i; 
Console.WriteLine(ni); // 5
// i = ni; // this will fail to compile 
Console.WriteLine(ni.HasValue); // True 
i = ni.Value; 
Console.WriteLine(i); // 5
ni = null; 
Console.WriteLine(ni.HasValue); // False 
//i = ni.Value; // System.InvalidOperationException 
i = ni.GetValueOrDefault(); 
Console.WriteLine(i); // 0

```









