#!/bin/bash

for i in articles/???; do
    echo $i
    Z=`cat $i/zoom.txt`
    if [ -f $i/fig.svg ]; then
        rsvg-convert -x $Z -y $Z $i/fig.svg -f pdf -o $i/fig.pdf
    fi
done
