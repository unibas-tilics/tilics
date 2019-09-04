# tilics/booklet/Makefile

all:	main.pdf

main.pdf: main.tex intro.tex tilics.cls
	pdflatex main
	pdflatex main

start.pdf: start.svg
	inkscape -D -z --file=start.svg --export-pdf=start.pdf --export-latex

main-cropped.pdf: main.pdf
	pdfcrop --margin '-0.25 -29.5 -0.25 -29' main.pdf main-cropped.pdf

clean:
	rm -rf *.aux *.log *~

print: main.pdf
	$(eval NOFP := $(shell pdfinfo main.pdf | awk '/Pages/{print $$2}'))
	$(eval SEQ := $(shell ./bin/rearrange8.py $(NOFP)))
	@echo main.pdf has $(NOFP) pages, rearrangement sequence is:
	@echo " " $(SEQ)
	@echo
	pdfjam --frame true --nup 2x2 --outfile main-2x2.pdf --landscape main.pdf $(SEQ)

mapping:
	@for i in articles/*; do N=`grep image- $$i/txt.md | head -1 | sed 's/.*-\([0-9][0-9][0-9]\)-.*/\1/'`; printf "%-20s %s\n" "$$N - $$i:" "`grep \# $$i/txt.md | head -1`" ; done | sort

# eof
