<!-- BEGIN TITLE -->
# Oops! My Computer keeps freezing, could it be a livelock?
<!-- END TITLE -->

<!-- BEGIN BODY -->
Yes, It could be. A livelock is one of the reasons that might freeze your system. But, what is a livelock?  

Suppose two gentlemen facing each other in a narrow pathway and would like to pass to the other side as in the picture. The first asks the second to move to the left, and at the same time, the second asks the first to move to the right. They move from right to left and from left to right, but the situation happens again, and they cannot move on. So, they repeat their requests and keep swaying in the passage without passing.

This situation could happen in operating systems as well. When process A holds resource R1 and requires resource R2 which is held by process B and vice versa. They request the required resource from each other. Then, they exchange the resources and keep exchanging them without completing their tasks.  
<!-- END BODY -->


![Image title](../images/image-105-livelock.jpg)

## Author
<!-- BEGIN AUTHOR -->
Omnia Kahla
<!-- END AUTHOR -->
