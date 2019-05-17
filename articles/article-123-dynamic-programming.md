<!-- BEGIN TITLE -->
# Try dynamic programming with recursive problems
<!-- END TITLE -->

<!-- BEGIN BODY -->
Dynamic programming is similar to recursion as it requires to divide the problem into sub-problems. By solving the sub-problems, we get the solution of the bigger one. The difference is that in recursion we repeatedly calculate the results, but in dynamic programming, we memorize the old results, so we do not calculate the results again and again. 

In **Fib**onacci series for instance, while calculating Fib(5), we know that Fib(0)=0 and Fib(1) =1, so we start with them to calculate Fib(2). By memorizing Fib(2), we can calculate Fib(3) which is equal to Fib(2)+Fib(1). Then, memorizing Fib(3) and calculating Fib(4)=Fib(3)+Fib(2). We continue in the same way until we find our target. 

<!-- END BODY -->


![Image title](../images/image-123-dynamic-programming.svg)


## Optional text
<!-- BEGIN OPTIONAL -->
Dynamic programming is better suited when the problem could be divided into sub-problems and these sub-problems are overlapped. Also, the optimal solution of this problem could be found when combining the results of the sub-problems. 
<!-- END OPTIONAL -->



## Author
<!-- BEGIN AUTHOR -->
Omnia Kahla
<!-- END AUTHOR -->
