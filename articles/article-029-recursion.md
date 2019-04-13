<!-- BEGIN TITLE -->
# Sometimes a problem can be solved by solving the same problem, but smaller.
## And smaller. 
### And smaller.
<!-- END TITLE -->

<!-- BEGIN BODY -->
Imagine a problem that you can only solve if you know the solution to smaller instances of the same problem. Computing, for example, the 10th element from the famous *Fibonacci sequence*, will require you to sum up the 9th and 8th Fibonacci number. But if you don’t know the 10th number, you will most certainly not know the 9th and 8th either. So you‘ll have to go deeper: In order to obtain the 9th number, you need to add the 8th and 7th element. Knowing the 8th will require the 7th and 6th. And so on. Doing this is called *Recursion*.

But when to stop? Recursion only works if there are certain smallest problems for which you *know* the solution, otherwise you’ll keep fragmenting forever. Continuing with the approach above will eventually lead you to computing the 1st and 2nd Fibonacci number, which are defined to be 0 and 1, respectively. Knowing these will allow you to hand the results all the way to the top and finally obtain the desired 10th Fibonacci number.
<!-- END BODY -->


![Fibonacci spiral](../images/image-029-recursion.jpg)



## Author
<!-- BEGIN AUTHOR -->
Moira Zuber
<!-- END AUTHOR -->
