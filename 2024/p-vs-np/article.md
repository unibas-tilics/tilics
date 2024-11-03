# How hard can it be? 

How fast can certain problems be solved?  Can certain problems not be solved efficiently? 
To answer such questions, computer scientists group problems together in classes like *P* and *NP*.
P stands for *polynomial time*, meaning the solution time grows at a manageable rate, so problems in P are generally efficient to solve.
NP on the other hand includes problems solvable in *nondeterministic polynomial time*.
This means that if you could try out all possible solutions at once, you could find a solution in polynomial time.
Imagine a traveling salesman who needs to visit a bunch of cities. 
Given these cities and the distances between them, is there a route that visits every city once that is not longer than a certain distance limit?
A non-deterministic algorithm could compute all possible routes simultaneously and check whether such a route exists.
Since any physical computer cannot perform algorithms like the one above, all problems in NP currently cannot be solved in polynomial time.
However, it is not known whether problems in NP could be solved faster.
This question is so fundamental that one Million Dollars are awarded to whoever solves the question of whether P equals NP.

## Authors 
Carina Schrenk 
