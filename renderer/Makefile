hello:
	echo "Hello, World!"

mapping:
	@for i in 2024/*; do N=`grep image- $$i/txt.md | head -1 | sed 's/.*-\([0-9][0-9][0-9]\)-.*/\1/'`; printf "%-20s %s\n" "$$N - $$i:" "`grep \# $$i/txt.md | head -1`" ; done | sort

main.pdf: main.tex intro.tex tilics.cls
	pdflatex --enable-pipes --shell-escape main
	pdflatex --enable-pipes --shell-escape main

clean:
	rm -rf *.aux *.log *~