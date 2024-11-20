# The Million Dollar Question

A traveling salesman wants to visit $3$ cities to sell his goods.
Can he find a route that visits every city once that is at most $100$ km?
In his case, there are only $6$ possible routes to check.
But what if he had to go to $10$ cities? There would be $10! \approx 3.000.000$ options! 

It would be handy if the salesman had a machine that could try out all routes simultaneously.
Such a *nondeterministic* machine would be much faster! 
The computation time of the machine is polynomial in the number of cities:
For $3$ cities, a route consists of $3$ distances that must be added up.
For $10$ cities, the machine takes a bit longer because $10$ distances need to be added.
The computation time is not affected by how many potential solutions there are; it is only affected by how much effort is needed to check one.

Problems like this, where solution verification is fast (polynomial time), are in a class called **NP** (nondeterministic polynomial time) because they can be solved fast by the *nondeterministic* machine. 
Problems that real computers can solve in polynomial time are in a class called **P**.
It is unknown if problems in NP are also in P, aka could be solved faster.
One Million Dollars are awarded to whoever solves this question.


## Author
Carina Schrenk 
