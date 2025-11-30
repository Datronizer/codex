# Lists (Arrays)
Suppose I want to calculate the average score of a student. I would have to create one variable per grade. If a student has 16 quizzes a term, that's 16 variables. And in a class of 40 students, you are looking at 640 variables. That is massive and quite literally ridiculous.

To accommodate this shortcoming, most programming languages implemented a new data type: "**lists**". This data type is differs between languages, but it's commonly agreed that it should be called "arrays". For the sake of Python naming convention, I will call these "lists" rather than "arrays"
## Notation
To declare a list, wrap a series of elements between square brackets, separated by commas. Example:
```
quizGrades = [76, 55, 100, 92, 6]
```
## Selecting elements
To select an element in a list called `quizGrades`, do `quizGrades[n]` with `n` being the index you wish to select. For example:
```
quizGrades = [76, 55, 100, 92, 6]

print(quizGrades[2]) # prints 100 (index 2) from quizGrades
```

Printing an entire list at once can be done by calling the list name. `print(quizGrades)` yields the whole list.
## Adding elements
To add elements into Python (one or many), use `.append(x)` and `.extend([x1, x2, x3,...])` respectively. Example:
```
quizGrades = [76, 55, 100, 92, 6]

quizGrades.append(55)            # quizGrades = [76, 55, 100, 92, 6, 55]
quizGrades.extend([42,88,91])    # quizGrades = [76, 55, 100, 92, 6, 42, 88, 91
```

To insert an element into a specific location, use `.insert(a, b)` where `a` is the index where you want this item inserted, `b` is the item itself. Every element after this index will get nudged to the right to make room for this.
```
quizGrades = [76, 55, 100, 92, 6]

quizGrades.insert(1, 11)         # quizGrades = [76, 55, 100, 92, 6, 55]
```

For additional information, refer to Python documentations.

# [[Memory Maps#Typecasting (type conversion)|Typecasting (type conversion)]]
Suppose we have an `int i0 = 0x44` and a `short s0 = 0x1122`. We can fit it into a memory map like this.

| Address | Byte | Variable |
| ------- | ---- | -------- |
| 0       | 00   | i0       |
| 1       | 00   |          |
| 2       | 00   |          |
| 3       | 44   |          |
| ------- | ---- | -------- |
| 4       | 11   | s0       |
| 5       | 22   |          |
| ------- | ---- | -------- |
| 6       |      |          |
| 7       |      |          |
|         |      |          |

Now let's consider something. Since `i0` has 4 bytes, is it possible to convert `i0` into a `short` of 2 bytes? In all technical sense, yes you could, but you shouldn't at all. Here's why

Think of an `int` as a massive bucket, a `short` being a shot glass. If I pour the entire bucket into the shot glass, there is literally zero way in hell all that water goes into a `short` without overfilling. This overfilling is a loss of data. This is why Python usually prevents you from doing this. You SHOULD NOT convert between data types unless extremely necessary. And if you have to, you should use a built in method instead.

Other languages are more forgiving, but that also means a lot of errors can pop up from improper conversions.
## Lossy conversions
If I assign a smaller unit into a bigger unit, both already assigned, then the small one **completely** overwrites the bigger one and fills in the blank (the top part) with `00`.

On the other hand, if I assign a bigger one into a smaller one, the bigger one loses all its top data, and keeps only the bottom data that fits into the smaller unit.

The only time when a lossy conversion is "safe" is when you already know that your bigger datatype doesn't overflow upon conversion, then you can convert it (unsafe on paper but no data will be loss irl).