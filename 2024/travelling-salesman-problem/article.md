# Travelling Salesman Problem

At first glance, the Travelling Salesman Problem (TSP) seems simple: given a list of cities and the distances between them, what is the shortest possible route that visits each city once and returns to the starting point?

But here is the catch: as the number of cities increases, the problem becomes exponentially harder. For example, with 3 cities, there are only 2 possible routes. With 11 cities, there are over 3.6 million! For 20 cities, the number is so huge it is practically impossible to calculate all the routes one by one.

TSP is called an NP-hard problem. This means there is no quick way to find the shortest route. We can easily check if a route works, but figuring out the best one takes an enormous amount of time.

TSP is more than a theoretical puzzle - it is used in real life for things like delivery routes, traffic planning, and even DNA sequencing. Solving it efficiently could save billions of dollars in logistics and beyond. But for now, it is one of the toughest nuts to crack in computer science.

## Authors
- Muhammad Hashim