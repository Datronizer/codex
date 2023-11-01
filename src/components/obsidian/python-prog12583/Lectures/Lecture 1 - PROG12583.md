#lecture
# Python

## Types
Types are basically classifications of what is being typed and processed in Python's compiler. Types help the compiler (and you) figure out which is which. Here are a few basic ones we covered in class.
### Strings (`string` or `str`)
A string is... well... a string! A string of characters, a string of numbers, a string of numbers and characters are all strings. Strings are one of the fundamental components of programming languages. A string is a fundamental [[#Types|type]] if you will.

You can convert most fundamental types into string by using `str()`. Example, `123` is a number, but `str(123)` is a string.

A string is denoted by a pair of quote marks. Example: `"Hello world!"` is a string but `Hello world!` is an error. This is just to help the compiler in the Python language understand "when" and "where" a string begins and ends. Anything else that's not a string is automatically a code or other types.
### Numbers
We already know what numbers are, it's in our everyday life! We use it so often we tend to forget what it really means. For a computer, it's essential you know what it means to ensure correct code. Most of the time, for general uses, the interpreter accepts [[Decimals|decimal numbers]] as it converts everything back to [[Binary|binary]] anyways. There are a few types of numbers in Python:
#### Integers (`int`)
Integers are what the name suggests. They are whole numbers, ranging from negative 2.4 million to positive 2.4 million (refer to [[#Quirks|Python quirks]] for explanation). 
#### Floats (`float`)
Floats are short for **Floating point values**. The "floating point" part refers to the decimal point. It "floats" because in a 32bit system, we choose a "breaking point", the left of this will be a whole number, the right of this will be decimals, and this number itself becomes a decimal point. This decimal point can "float" around any of the 23 bits on the right to denote different decimal values up to 10^-23.
## Computation
Numbers can be computed during compile time and *generally* are converted to a common type for computation. For example: `4int + 2.5float = 4.0float + 2.5float = 6.5float`. This is to simplify computation processes for people who are not familiar with type casting but is very annoying for people who are. 
## Realtime computation

## Declaring variables
You can assign a value of any [[#Types|type]] to a variable of *almost* any declared name. Example: `a = 4, b = 3, c = a + b, d = true, e = "hello", etc`. Python, as well as most languages, are pretty liberal with variable names. And of course, after declaring a variable, you can print that variable. `print(c = a + b)` yields `7` as a result since it is computed as it is interpreted.

Generally, you want to declare variables and assign values to them rather than printing or working with hard-coded numbers. In the professional setting, you want to avoid hard-coded values.
## Arithmetic operators
Python contains some simple arithmetic. There are a few operators coded into the language:
- Plus `+`
- Minus `-`
- Multiplication `*`
- Division `/`
- Power `**`
- Modulo `%`
## Formatting recommendations
You are encouraged to make your code easy to read by separating variable declaration from functions and such.

Follow something like this:
```
a = 4
b = 3
c = a + b

print(a + b)
```
That is more legible than clumping them together.
## `print()`
`print()` is a method that allows you to "print" whatever is between the parentheses to the console for viewing and bug checking. It can print anything as long as it's syntactically correct.

Examples of a few things you can print:
- `print("Hello!")` will print `Hello` to the console.
- `print(2 + 5)` will print `7` to the console.
- `print(1 + 1 == 5)` will print `false` to the console.
- Assigning `a = 3, b = 4` and `print(a + b)` will print `7` to the console.
## Error messages
Generally Python is really picky with syntax and case-sensitivity. However, as a silver lining, its error messages are super clear. There are usually 3 components to an error:
```
ERROR!
>File "<string>", line 3
>    print("Hello, I am " + str(23) + " years old)
>                                     ^
> SyntaxError: unterminated string literal (detected at line 3)
```
- The first component is where the error is. As you can see the issue is on `line 3`.
- The second component is where exactly the error began. This is signified by a `^` hat character that points to said location. 
	- Note that this points towards where the error starts, not where the error is. For example, in this string, we are missing an end quote, but the compiler doesn't know where it's supposed to end, so it pings the whole "incomplete string", at the quote mark--where the error began.
- The third component is the error details. It specifies what type of error it is. In this case it's a `SyntaxError`, meaning you messed up a syntax somewhere, like a missing end quote.
	- The second clause goes more into what's wrong. `unterminated string literal` means what it means: the string is unterminated! Every string has a start and an end, and we signify them with a quote mark.