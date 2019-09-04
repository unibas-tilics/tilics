# TILICS/ranking/2019

This directory contains scripts to generate a PDF document
containing all articles to be ranked.

# (the following text copied from booklet-first-test branch)

This directory contains the tools and content copies required to produce
a "2^5 Things I Learned in Computer Science" sample booklet.

## Description
- these are not (yet) the final/revised/grammar-checked articles
- the final PDF (```main-2x2.pdf```) has to be printed on a A3 printer (or it results, if printed on A4, on a mini version of the booklet)
- the printed pages have to be cut in two:
  - along the long side
  - then trimmed, assembled and
  - finally stapled twice in the fold

## Tools and assumptions

- ```bin/branch2dir.sh``` was used to copy the content from the (unmerged) branches, some files may be missed if the naming conventions were not respected, creating consecutive ```article/NN``` directories
- inside an ```article/NN``` directory, two files must exist:
  * ```fig.pdf``` - correctly scaled version of the figure that goes left
  * ```txt.tex``` - LaTeX text (note: almost all needed some manual editing, despite the following ```md2tex.py``` tool)
- ```bin/md2tex.py article/NN``` converts the markdown content to LaTex, to stdout, so you have to manually redirect to ```> article/NN/txt.tex```
- scaling the figures currently was done manually, by first converting to PNG, then changing the DPI before converting into PDF
- the file ```main.pdf``` is then produced by calling ```make``` (looping over all directories which contain a fig.pdf is done with LaTeX code)
- the correspondence between TILICS article number and directory number can be displayed using ```make mapping```
- this mapping will have to change, depending on the desired article sequence for the final product
- the file ```main.pdf``` needs to have a multiple of 8 pages, because the layout is for a double-sided A3 page, each having 2x2 articles
- ```bin/rearrange.py 40``` produces in this example the shuffeling of pages for the double-sided 2x2 article
- ```make print``` produces the final ```main-2x2.pdf``` file

2019-05-12, christian.tschudin@unibas.ch
