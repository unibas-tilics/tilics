#!/bin/bash

git branch --all --list > branches1.tmp
grep -h 'article-[0-9]' branches1.tmp | sed 's@remotes/origin/@@' \
                                      | sed 's/. //' | sort -u > branches2.tmp
BRANCHES=`cat branches2.tmp`
rm -f branches*.tmp

N=1
for i in $BRANCHES; do
    echo $N $i
    ARTNR=`echo $i | sed 's/.*-\([0-9]*\)-.*/\1/g'`
    git checkout -q $i
    git pull -q
    ARTNAME=`ls ../../articles/*.md | head -1`
    if [ -f $ARTNAME ]; then
      rm -rf articles/$N
      mkdir -p articles/$N
      cp $ARTNAME articles/$N/txt.md
      FIGNAME=`ls ../../images/*.svg | head -1`
      if [ "$FIGNAME" == "" ]; then
          echo "** article $N/$ARTNUM has no SVG"
      else
          cp $FIGNAME articles/$N/fig.svg 2>/dev/null
          Z="0.1"
          echo $Z >articles/$N/zoom.txt
          rsvg-convert -x $Z -y $Z articles/$N/fig.svg -f pdf -o articles/$N/fig.pdf
      fi
      ./bin/md2tex.py articles/$N >articles/$N/txt.tex
      echo "\\renewcommand{\\tilicsArtNum}{$ARTNR}" > articles/$N/num.tex
      N=$[$N + 1]
    else
        echo "  skipping $i"
        continue
    fi

#    if [ $N -ge 4 ]; then
#       break
#    fi
done

git checkout ranking-2019
