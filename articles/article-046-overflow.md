<!-- BEGIN TITLE -->
# Overflow
<!-- END TITLE -->

<!-- BEGIN BODY -->
Imagine an odometer of a car. There are six spaces each of which can display a one digit number. Therefore, the highest number that can be represented is 999'999, after which the odometer turns to 000'000 again.

The same thing can happen in a computer. Every number has a fixed amount of bits it can use to store its value. As soon as all of these bits are set, increasing the number again will cause an overflow, meaning that the number will wrap around to its smallest value.

This behavior has led to notorious bugs, such as the software of the Ariane 5 rocket malfunctioning due to an unexpected overflow. This caused a crash shortly after takeoff, costing several hundred million dollars.
<!-- END BODY -->

![Overflow](../images/image-046-overflow.svg)


## Optional text
<!-- BEGIN OPTIONAL -->

<!-- END OPTIONAL -->



## Author
<!-- BEGIN AUTHOR -->
Nils Bühlmann
<!-- END AUTHOR -->
