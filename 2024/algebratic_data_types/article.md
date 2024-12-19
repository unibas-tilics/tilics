# ADTs - the language to describe objects
When overwhelmed by complicated objects, computer scientists break them down into simpler parts to better understand them. The formal language used to describe things as parts is called **algebraic data types** (ADTs). ADTs are so useful that they're baked into programming languages like TypeScript, Rust, and Haskell as a fundamental concept.

In this language, $+$ means "the thing is either this or that," while $*$ signifies "the thing consists of these parts."

For example, we might write:  
$$Tree = Leaf + Branch (Tree * Tree)$$  
which translates to "a binary tree could be just a single leaf or made up of two smaller binary trees."

Once described this way, objects are well understood by computers. They can then be managed more safely or automatically optimized.

## Author
- Tri Nguyen
