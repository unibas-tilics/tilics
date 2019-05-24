#!/usr/bin/env python3

# 2019-05-12, christian.tschudin@unibas.ch

import sys

def rearrange8(low, high):
    if low >= high:
        return []
    # outputs page numbers for a double-side print of 8 pages (2x2)
    s = [ high, low, high-2, low+2,       # front
          low+1, high-1, low+3, high-3 ]  # back
    return s + rearrange8(low+4, high-4)

# ----------------------------------------------------------------------
if __name__ == '__main__':

    if len(sys.argv) < 2:
        print(f"usage: {sys.argv[0]} NUMBEROFPAGES")
    else:
        count = int(sys.argv[1])
        if count%8 != 0:
            print(f"NUMBEROFPAGES ({count}) must be multiple of 8")
        else:
            print(','.join([str(i) for i in rearrange8(1,count)]))

    # test vector for 24 pages, result should be:
    # '24,1,22,3,2,23,4,21,20,5,18,7,6,19,8,17,16,9,14,11,10,15,12,13'

# eof
