<!-- BEGIN TITLE -->
# Why There Is No Perfect Anti-Virus
<!-- END TITLE -->

<!-- BEGIN BODY -->
In computer science, simple "Yes/No" questions are called **decision
problems**.  A decision problem is called **decidable** if we can
write a program that can always find an answer for such a problem.

An example for such a decision problem is "does this program contain a
computer virus".  If this problem was decidable, there could be
another program that could always correctly answer this question with
"Yes" or "No".  A mathematician called Henry Gordon Rice showed that
such decision problems about the behavior of another program are
always undecidable, unless the answer is **always** the same.

As most viruses are hidden inside other software and do not always
expose their real nature, this decision problem can't be solved
according to Rice's theorem.
<!-- END BODY -->


![Image title](../images/image-093-rices-theorem.svg)


## Optional text
<!-- BEGIN OPTIONAL -->
Most anti-virus software only looks for viruses that are already
known.  This problem of finding already known patterns in other
programs is decidable, as those patterns (so-called "signatures") are
always present in the program, no matter whether the virus is
currently doing something or not.
<!-- END OPTIONAL -->



## Author
<!-- BEGIN AUTHOR -->
Sebastian Philipp
<!-- END AUTHOR -->
