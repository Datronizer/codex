# `if` statements
`if` is a method used to check if some statement `a` is true. Example:
```
a = 2
if a == 2:
	print('a is 2!')

>> 'a is 2!'
```
# Flowchart / Diagram
Oftentimes we rely on flowcharts to convey information about our code without using code itself. Sometimes you just want to convey a "flow" rather than 82 lines of code.

Common notations for flowcharts:
- If statements: diamond shape
	- If true: a line goes down from the diamond.
	- If false: a line branches **rightwards** and goes down from the diamond.
	- Sometimes it's a diamond: no is left, yes is right. Why? No clue.
- `print`: curvy rectangle. Looks like a double curved piece of paper.

# String formatting
You probably are wondering: if I indicate a string with a pair of quotes, then how do I print quotes within a string? You probably have tried and found out python craps itself because it doesn't know why a quote is there and why everything else suddenly stops making sense.

This is when "escape sequences" come in:
- `\"` tells the interpreter that "this quote is part of the string, do not turn this into a new string".
- `\t` prints a tab
- `\b` prints a backspace
- `\n` prints a new line
- `\\` prints a backslash (you know? because we already have backslash as the escape indicator?)
- `\ooo` prints an octal value
- `\xhh` prints a hex value
Escape sequences are called that because they temporarily "escape" the string to preserve their formatting.