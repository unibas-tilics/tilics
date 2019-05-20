<!-- BEGIN TITLE -->
# Oops! My computer keeps freezing, could it be a livelock?
<!-- END TITLE -->

<!-- BEGIN BODY -->
Yes, It could be. A livelock is one of the reasons that might freeze your system. But, what is a livelock?  

Suppose two gentlemen sitting in a restaurant and the waiter brings the order without enough cutlery. The first gentleman has a fork and the second one has a knife. To be able to eat, the first asks the second for the knife and at the same time the second asks the first for the fork. They exchange the cutlery, and the situation happens again; the first has the knife and the second has the fork. They keep exchanging the cutlery without eating. 

This situation could happen in operating systems as well. When process A holds resource R1 and requires resource R2 which is held by process B and vice versa. They request the required resource from each other. Then, they exchange the resources and keep exchanging them without completing their tasks.  
<!-- END BODY -->


![Image title](../images/image-105-livelock.svg)

## Author
<!-- BEGIN AUTHOR -->
Omnia Kahla
<!-- END AUTHOR -->
