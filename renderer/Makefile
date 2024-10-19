# Define variables for the source directory and output files
PAGE_WIDTH := 300
PAGE_HEIGHT := 200
SRC_DIR := ../2024
OUTPUT_PDF := 2024_TILICS
NUM_ARTICLES := 32

define generate_toc
	awk 'FNR==1 { sub(/^# /, ""); print }' $(SRC_DIR)/*/article.md | \
	head -n $(1) | \
	awk '{ lines[NR] = $$0 } \
		END { mid = int((NR + 1) / 2); \
		for (i = 1; i <= mid; i++) print i, "&&", lines[i], "&&", mid + i, "&&", lines[mid + i], "\\\\" }'
endef

define process_articles
	@for dir in $(SRC_DIR)/*/; do \
		echo "Processing $$dir..."; \
		pandoc -f markdown -t latex --wrap=preserve --lua-filter=filter.lua "$${dir}article.md" > "$${dir}article.tex"; \
	done
endef

define create_articles_latex
	@echo "Creating articles.tex..."
	@rm -f articles.tex
	@touch articles.tex
	@for dir in $(SRC_DIR)/*/; do \
		echo "Insert $$dir..."; \
		echo "\inputSvg{$${dir}illustration.svg}" >> articles.tex; \
		echo "\inputText{$${dir}article.tex}" >> articles.tex; \
	done
endef


all: $(OUTPUT_PDF).pdf cropped


# Main PDF generation
$(OUTPUT_PDF).pdf: main.tex intro.tex tilics.cls toc.tex articles.tex
	@echo "Generating $(OUTPUT_PDF).pdf..."
	pdflatex --version
	pdflatex --enable-pipes --shell-escape main
	pdflatex --enable-pipes --shell-escape main
	@mv main.pdf $(OUTPUT_PDF).pdf
	pdfinfo $(OUTPUT_PDF).pdf | grep "Page size"

cropped: $(OUTPUT_PDF).pdf
	pdfcrop --margin '-0.25 -29.5 -0.25 -29' $(OUTPUT_PDF).pdf $(OUTPUT_PDF)-cropped.pdf


toc.tex: 
	@echo "Generating toc.tex..."
	@$(call generate_toc, $(NUM_ARTICLES)) > toc.tex

clean:
	rm -f toc.tex *.aux *.log $(OUTPUT_PDF)-cropped.pdf


articles.tex:
	$(call process_articles)
	@echo "Generating articles.tex..."
	@$(call create_articles_latex)
	

