The ASCII table is a table of all characters supported in ASCII, for example, pi. Here's how you can type these characters into your text editor.
- Look up the ASCII number of the symbol
- Hold Alt and type that number
- The new symbol should appear
## History
Now that we know how memory allocation works, we can discuss the formation of the ASCII table. The ASCII table was formed from a need for a unified memory organization system for characters in a computer. 

Suppose my PC [[Memory Maps|allocates]] A = 65, B = 66, etc. and your PC allocates A = 42, B = 43, etc. If I send an email to you, the contents inside my email, which is [[Lecture 2 - TELE13167#The 5 TCP/IP layers|converted from letters to numbers]] to be sent, to your inbox, to letters again, will be jumbled because we have different addresses for our characters. This got annoying fast, so computer scientists eventually got together to address the issue and form the ASCII table.

This was fine for a while until we realized we need to accommodate all the other languages like Arabic, Chinese, Hebrew, etc. We then realized we needed way more than 99 letters. So we did the simplest thing: we combined 2 bytes into the new standard.