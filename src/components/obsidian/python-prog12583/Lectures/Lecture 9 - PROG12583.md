# `for` loops
As we progress further into Python, we will require some new tools in order to aid our programming. We have recently dealt with `if-else` conditionals. Now, what if we want to check the conditionals of ALL elements within a list, or to print all numbers in increments of 4? Our repertoire is insufficient for this task! It is here where we will need a `for` loop.

`for` iterates over a list or a range of values until it reaches the end. Then it stops.
```
# Range iteration:
for i in range(0,5):
	print(i, end=" ")

>> 0, 1, 2, 3, 4


# List iteration:
for i in [12, 24, 36, 48, 60]:
	print(i, end=" ")

>> 12, 24, 36, 48, 60	
```
# `while` loops
`while` loops are the first loops to have been invented for computer science. It works by looping everything nested within it as long as the while condition still satisfies. 

This means if you want a `while` loop to run forever, just give it a statement that is always true, for example: the Boolean value `True` itself.
```
# Simple while loop until value reaches 5:
i = 0
while i < 5:
	i++
	print(i)

>> 1, 2, 3, 4, 5

# Infinite loop:
while True:
	i++

>> StackOverflowError
```

# Modulo
[[Modulo]] is back baby and it's finally applicable to Python.