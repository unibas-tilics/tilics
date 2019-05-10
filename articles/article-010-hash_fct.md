<!-- BEGIN TITLE -->
# Mincing Bytes (or the Art of Hashing)
<!-- END TITLE -->

<!-- BEGIN BODY -->

By thoroughly mincing and blending a file's content several times,
each time keeping only a small part of it, one can extract a bit
pattern called a hash. For all practical purposes, such a hash value
is unique to the underlying data.

One can not overstate the importance of hash computations for
cryptographic algorithms as well as for efficient data management.

In cryptography, hashing yields a hard to forge "fingerprint" so that
an attacker cannot change the terms of an electronic contract without
also changing the fingerprint value, for example.

In data management, hashing serves to "spread out" items in space,
like assigning a unique slot number to arbitrary data items,
with a low chance of assigning that number twice.

<!-- END BODY -->

![sequende of blenders](../images/image-010-hash-fct.svg)

## Author
<!-- BEGIN AUTHOR -->
cft
<!-- END AUTHOR -->
