<!-- BEGIN TITLE -->
# No Mercy: The Year 2038 Problem
<!-- END TITLE -->

<!-- BEGIN BODY -->
The date of Jan 1, 1970 is to UNIX developpers what year 0 is for
Christians, just that in UNIX time you count in seconds, not in days
as we do with calendars.

Now here is a problem:
* in UNIX time, two billion seconds _after_ Jan 1, 1970 is Jan 19, 2038
* in UNIX time, two billion seconds _before_ Jan 1, 1970 is Dec 13, 1901

Many UNIX systems can hold time values only up to four billions, and
then values start to "wrap around". This means that on Jan 19, 2038,
these UNIX systems will think it is the year 1901!

The clock is now ticking for finding all these old UNIX systems and to
update their software, giving them more bits for storing UNIX
time. For sure, some systems will be missed and some systems will be
too old to be fixed. Real time will have no mercy ...

<!-- END BODY -->


![time ribbon](../images/image-086-year-2038-problem_BIS.png)


## Optional text
<!-- BEGIN OPTIONAL -->
BIS version by cft
<!-- END OPTIONAL -->



## Author
<!-- BEGIN AUTHOR -->
Patrick Kahr
<!-- END AUTHOR -->
