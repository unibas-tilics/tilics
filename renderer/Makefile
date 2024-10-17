# Define variables for the source directory and output files
SRC_DIR := ../2024

# Define a function to generate the TOC using awk
define generate_toc
	awk 'FNR==1 { sub(/^# /, ""); print }' $(SRC_DIR)/*/article.md | \
	head -n $(1) | \
	awk '{ lines[NR] = $$0 } \
		END { mid = int((NR + 1) / 2); \
		for (i = 1; i <= mid; i++) print i, "&&", lines[i], "&&", mid + i, "&&", lines[mid + i], "\\\\" }'
endef

# Targets to create the TOC
toc.tex: 
	@echo "Generating toc.tex..."
	@$(call generate_toc, 32) > toc.tex

toc_mini.tex:
	@echo "Generating toc_mini.tex..."
	@$(call generate_toc, 16) > toc_mini.tex

# Main PDF generation
main.pdf: main.tex intro.tex tilics.cls toc.tex toc_mini.tex
	@echo "Generating main.pdf..."
	pdflatex --enable-pipes --shell-escape main
	pdflatex --enable-pipes --shell-escape main

# Default target
all: main.pdf

# Clean up generated files
clean:
	rm -f $(OUTPUT_TOC) $(OUTPUT_TOC_MINI) main.pdf
