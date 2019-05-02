<!-- BEGIN TITLE -->
# Semaphores prevent crashes
<!-- END TITLE -->

<!-- BEGIN BODY -->
Imagine a railway intersection where only one train can pass at a time. If any other train tries to pass the intersection while it's already being used, a crash happens.

The same thing can happen in a computer. As soon as a file gets changed from two different sources at the same time, things can go wrong.

While in rail traffic this can be solved by having a *semaphore* to only ever allow one train to pass the intersection, the same is done in computers. Here, a *semaphore* only ever allows one source to access a *critical section*. Everyone else has to wait, thus preventing any unintended behavior or crashes
<!-- END BODY -->

![Mutex](../images/image-058-mutex.svg)


## Optional text
<!-- BEGIN OPTIONAL -->
<!-- END OPTIONAL -->



## Author
<!-- BEGIN AUTHOR -->
Nils Bühlmann
<!-- END AUTHOR -->
