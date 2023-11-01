# [[Dictionaries]]
## Definition
Holy shit boys we finally reach the third best chapter. Allow me to explain this in a simple way. A dictionary in Python works the same way as the one in real life.

What do I mean by that? Well, a dictionary is basically a list right? It is a list of entries! What's in those entries? Well we have a word - in programming this is called a **Key**; and we have a definition of that word - in programming this is called a **Value**. An entry in this case is called a **key-value pair**.

> [!Important] Every key is unique! Don't name keys the same thing! 
> It's like with a dictionary. Why would there be 2 identical words with identical forms (nouns/etc.) with identical pronunciations, but different meanings? It's better to have 1 word have multiple meanings underneath 1 section than multiple sections.

Example:
```
birthdays = {
	"chien": "Jan 5"
	"obama": "Aug 4"
	"santa": "Dec 24"    # that's not his birthday
}
```
The above structure is called a **dictionary**, but in other languages, this is called a **hashmap** (you're going to hear this word a ton in the future). 

As you can see the dictionary introduces a new notation: `{}`-curly brackets. The reason for this is from coding legacy. Curly brackets have always been used to denote objects.

Speaking of which, yes, this is in fact an [[object]]! Congratulations, you wrote your first object in [[Object-Oriented Programming]]! 
## Accessing data
Anyways, now that we have a dictionary, how do we access an entry? It's quite simple:
```
# To access Obama's birthday. Do:

print(birthdays["obama"])


>> Aug 4
```
This tells Python to go into a dictionary called `birthdays`, look for a key named `obama`, and return its value, in this case it should return `Aug 4`. Simple right? 

There are way more methods related to dictionaries out there and they are generally common between languages. Look them up on Python's General Index and find out!
## Common methods
A good method one should now is `dict.get(x: string)`. This retrieves the value if a key is found using the specified argument.

2 other good methods are `.keys() and .values()`. Allow me to show you what they do.

```
# Using the same birthday file as above.

print(birthdays.get("chien"))
print(birthdays.keys())
print(birthdays.values())

>> Jan 5
   chien, obama, santa
   Jan 5, Aug 4, Dec 24
```
## Supported data types
Dictionaries being simple key-value pairs allows it to support plenty of data types. [[Simple Data Types#Types#Strings (`string` or `str`)|Strings]], [[Simple Data Types#Numbers#Integers (`int`)|ints]], and [[Simple Data Types#Numbers#Floats (`float`)|floats]] are all supported off the bat. Surprisingly [[Intermediate Datatypes#Arrays|lists]] are also supported as well as other [[dictionaries]]! In a way, dictionaries in Python are basically `.json` files!

Look at how you can extract data from lists inside dictionaries:
```
food = {
    "grapes"      : ["sweet", "sour"],
    "limes"       : ["sour", "bitter"],
    "dragonfruit" : ["bitter", "sweet"], # no it's not
    "jalapeno"    : ["hot", "sweet"],
    "potatoes"    : ["tasteless", "grainy"]
}

print(food["grapes"][1])

>> sour
```

Here's another way, notations explained in the next section
```
for key, value in food.items():
    print("%-11s %-9s %-9s" % (key, value[0], value[1]))

>> grapes      sweet     sour
   limes       sour      bitter
   dragonfruit bitter    sweet
   jalapeno    hot       sweet
   potatoes    tasteless grainy
```
## Iterating whole items
Since this is an object containing multiple other items, it is safe for one to assume they can extract the whole item (key and value included). We can do this using the `for` loop, here being a `for` iterator (same thing).

```
for key, value in birthdays.items():
	print(key, value)

>> ("chien", "Jan 5")
   ("obama", "Aug 4")
   ("santa", "Dec 24")
```

As you can see, iterating this way allows us to take both the key and value, thus allowing us to manipulate data in a more flexible way.

# String formatting (cont'd)
Remember when we used `.format()` to format our strings? Cool, there's a better way. This is what the homies call "built-in formatting types" because this came directly from C. Yes! The C programming language!

This makes sense since Python is built on top of C, so it would make sense that it carries a lot of things over. In this case, string formatters. The following 2 strings are identical.

```
# .format() style
print("My cow weighs {0:3d} lbs and her name is {1:5s}".format(400, "betsy"))

# C-format style
print("My cow weighs %-3d lbs and her name is %-5s" % (400, "betsy"))
```

Much easier right? In my opinions this is better than printing short strings repeatedly in a loop rather than a long sentence with a ton of variables. In that case `.format()` is better, but not by much.

That's a developer skill issue.