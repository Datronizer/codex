# Comments
Code can sometimes be convoluted, especially if you want to shorten a function by simplifying some names and condensing operations as much as possible. This is where comments come in. 

Comments allow you to notate what you want the next reader/developer to see/understand. For example.
```
import math

a = 3
b = 2
c = math.pow(3, 2)   # sets a to the power of b

print(c)
```
As you can see this comment notates what a function does. This is oftentimes not necessary as long as your code is super clear. But if things get convoluted i.e. writing a Gaussian function with multiple variables, some comments could help the reader track which part is which, and what steps you are doing.

# Inputs
Inputting is another important layer of human-computer communication. Some might say it's the first layer between a user and a computer, probably the second for developers though. To tell Python to await your input, do `input(someStringHere)`. Example:
```
phrase = input("Enter any string: ")

print(phrase)

> Enter any string: yo mama
> yo mama
```
After you input something into the terminal, Python will store that temporarily into a "buffer" and awaits the "enter" key. The enter key will trigger a terminate command and cause the await to break => the data is converted into a string and the rest of the code continues as normal.

# Type conversions

# Random (library)
Random is a useful library as it can automate/create random data for your purposes. There are a few simple methods that generates random numbers within a range, or based on a seed. To import random into your code, do `import random`. For additional information regarding the library, see [the documentation](https://docs.python.org/3/library/random.html#module-random).

Randomness in computer is NOT random, but rather pseudorandom. It is code-generated randomness and since code is predictable, this randomness is "predictable" albeit nigh impossible for humans.