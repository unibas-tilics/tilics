<!-- BEGIN TITLE -->
# Year 2038 Problem 
<!-- END TITLE -->

<!-- BEGIN BODY -->
The most common way to represent time in computer systems, is Unix time. It is expressed as the number of seconds elapsed since 00:00:00 Thursday, 1 January 1970 (UTC). 

Unix timestamps are stored as a string of 32 0's and 1's (bits). The leftmost bit indicates the sign of the timestamp. The remaining positions act as a binary counter. Every second, the counter is incremented by one. Negative timestamps represent dates before the beginning of unix time.

Thus, timestamps from '10000000000000000000000000000' which corresponds to 20:45:52 Friday, 13 December 1901 to '0111111111111111111111111111' which stands for 03:14:07 Tuesday, 19 January 2038 can be stored. Incrementing to the latter will cause the leftmost bit to wrap around and the counter would be reset to the most negative value. This phenomenon is know as the 'Year 2038 Problem'. Systems that are not updated with a larger counter by then, will indicate wrong timestamps from 03:14:07 Tuesday, 19 January 2038 on. In some cases this can have severe consequences.
<!-- END BODY -->


![Image title](../images/image-086-year-2038-problem.svg)


## Optional text
<!-- BEGIN OPTIONAL -->
<!-- END OPTIONAL -->



## Author
<!-- BEGIN AUTHOR -->
Patrick Kahr
<!-- END AUTHOR -->
