# [[Floating-Point Numbers]]
## Real Numbers
Real numbers are basically any numbers we tend to use on a daily basis, this can be positive or negative, decimals or whole numbers, rational or irrational. For a more detailed analysis, refer to [[Real Numbers]].

Real numbers are composed of a lot of complex elements and outliers. Storing these real numbers as they are is extremely inconvenient. For example, how much [[Lecture 2 - PROG12583#Memory Map (memmap)|storage]] do we need to store a number like $3.14?$ How many bytes do we need to store this? Where does the floating point go? WHAT IS A FLOATING POINT? 
## Floating-Point Numbers
ajsdkjk
## Doubles
## Longlong
## Short
## Byte

## Strings
I think you will be surprised to know that strings are actually... bytes! It makes sense though! A string is basically an [[Lecture 8 - PROG12583#Lists (Arrays)|array]] of characters (we'll talk about arrays later). But each of these characters can be denoted with an ASCII value, aka, a byte! 
## Double Precision floating point numbers
A typical floating point number is 4 bytes in value. But, for double the accuracy, we often use **double-precision floats**, these are instead 8 bytes.
## Encoding
Nowadays, we don't have to worry too much about these questions. 

How do we denote real numbers in computer language. Well, one way is to return all these numbers to a common form. Take $3.14$ for example. How do we notate this in [[memory maps]]?

We can do what is colloquially known as "numeric gymnastics", specifically, we convert the decimal number into scientific notation.

Well we know $3.14 * 10^2 = 314\equiv 314 * 10^-2 = 3.14$ so we can denote it in this way and store that into the memory for ease of use. Why? Well computers only store things in terms of bytes. The only way we can satisfy this condition is to convert everything to bytes (we split them wherever necessary and give them "lookup values").

In computers, we use what is called **encoding IEEE 745** to encode data into bytes and send them to the memory for storage. We don't really need to know how it works, just consider it a "black box operation" that magically stacks your stuff neatly into the memory.

Unfortunately, since our number can only be stored in 4 bytes, chances are information will be lost upon encoding and decoding since the number would be chopped off. So, uh... yeah. **DON'T TEST FOR EQUALITY FOR FLOATING POINT NUMBERS WITHOUT AN ADDITIONAL ALGORITHM**.

**IEEE 745** is generally really good at storing data into the memory, but it is terrible at computation. this is when we rely on something called the [[#Math coprocessor]].
# Math coprocessor
## Overview
The math coprocessor is as the name suggests. It co-processes mathematical computations. Think of it like the "left brain" of the computer. The "left brain" does operations on whole numbers while the "right brain" does operations on all real numbers.

Examples:
- $6/3$ is an operation on 2 whole numbers, thus it goes "left".
- $6.5/3.5$ is an operation on 2 real numbers, thus it goes "right".

But what will happen when the number we are operating on is mixed? How do I do $6/3.5$? Simple right? We can just convert them to the same unit. Okay, which one?
- If we leave it as a default, it automatically goes to the "left" as it is more convenient (we'll talk about this later), so this number turns into $6/3$. 
- If we specify that we want a floating point calculation, this becomes $6.0/3.5$ and goes to the "right"

> [!note] If you're wondering how the computer "rounds" numbers in the main processor, it adds $0.5$ to the number and take only the whole number.
## History
Back then, computers are designed specifically for advanced and fast calculations. In general, old computers do this pretty well. Pretty well, until they run into floats. Floats cannot be easily computed as they have to be converted, then computed, then stored using IEEE 754. 

This sounds okay until you remember that old computers are significantly slower than today's. Plus there isn't much memory so have 2 separate software for computing whole numbers vs floats is a waste. Why don't we do something to quicken the process? 

Scientists came up with math coprocessors => a processor whose whole job is to make quick computations on **whole numbers** so that the main processor can focus on everything else like **floats, strings, etc.**

Where the main processor computes with software, all the computations done on the math coprocessor are physical, meaning they all run on 0s and 1s on semiconductors. This allows for blazing fast computations of whole numbers, which are way more often used than floats. We call this "metal computation" because it's all done on the metal and none on the software.
## Benefits
fast, accurate, offloads work from main processor
## Drawbacks
Since everything is moved to the left brain by default, every operation can exponentially lead to bigger mistakes. Here's a good example:
$$
\begin{align}
a &= 4 / 3 * 2 - 6 * 2 / 4 / 2 \\
a &= 1 * 2 - 6*2/4/2 \\
a &= 2 - 3/2 \\
a &= 2 - 1 \\
a &= 1 \\
\end{align}
$$
So be careful when doing these long computations.
