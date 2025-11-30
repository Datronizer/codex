---
tags:
  - coding
  - datatype
  - concept
  - python
---
# Definition
Types are basically classifications of what is being typed and processed in Python's compiler. Types help the compiler (and you) figure out which is which. Here are a few basic ones we covered in class.
# Strings (`string` or `str`)
A string is... well... a string! A string of characters, a string of numbers, a string of numbers and characters are all strings. Strings are one of the fundamental components of programming languages. A string is a fundamental [[#Types|type]] if you will.

You can convert most fundamental types into string by using `str()`. Example, `123` is a number, but `str(123)` is a string.

A string is denoted by a pair of quote marks. Example: `"Hello world!"` is a string but `Hello world!` is an error. This is just to help the compiler in the Python language understand "when" and "where" a string begins and ends. Anything else that's not a string is automatically a code or other types.
# Numbers
We already know what numbers are, it's in our everyday life! We use it so often we tend to forget what it really means. For a computer, it's essential you know what it means to ensure correct code. Most of the time, for general uses, the interpreter accepts [[Decimals|decimal numbers]] as it converts everything back to [[Binary|binary]] anyways. There are a few types of numbers in Python:
## [[Integers|Integers (`int`)]]
Integers are what the name suggests. They are whole numbers, ranging from negative 2.4 million to positive 2.4 million. 
## [[Floating-Point Numbers|Floats (`float`)]]
Floats are short for **[[Floating-point numbers]]**. The "floating point" part refers to the decimal point. It "floats" because in a 32bit system, we choose a "breaking point", the left of this will be a whole number, the right of this will be decimals, and this number itself becomes a decimal point. This decimal point can "float" around any of the 23 bits on the right to denote different decimal values up to 10^-23.
# Booleans (`bool`)

For information regarding computation of Booleans, refer to [[Boolean Algebra]]