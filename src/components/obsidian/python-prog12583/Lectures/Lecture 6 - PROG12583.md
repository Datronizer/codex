# String formatting
Oftentimes we find ourselves printing variables whose values aren't exactly what we're used to. I'm talking about floats that has 12 trailing zeroes and a 1 at the end when we could have easily rounded that to 2 decimal points. That is where **String formatting** comes in.

```
# Print 12.3456 as 12.34
print("{0:5.2f}".format((12.3456)))

>>> 12.35
```

The simplest way to format a `print` is to use `print('{:}', format())`. This is the fundamental structure of string formatting. Within the curly brackets is a **format specifier** that tells the compiler how this string should be printed. The following is an example:
```
  > print('{0:5.2f}'.format(12.3456))

The `5` signifies the "width" or "length" of the number/string. The `.2f` signifies 2 decimal places of a float, hence the `f`. The value you wish to format stays inside of `format()`

The `0` signifies the index of the "replacement". Basically means "hey Python, please replace the 0th format specifier with this string and format it." 
```

You can justify text by pointing in the direction you want it justified, e.g.: right justify would be `print("hello!".rjust(14,*))`. This yields `******hello!`