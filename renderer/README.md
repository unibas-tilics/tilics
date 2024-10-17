# PDF Renderer

This repository contains the code to render a booklet PDF. To do so, run:

```bash
make
```

### Rendering Process
1. Convert markdown files to LaTeX.
2. Convert images to PDF.
3. Generate a Table of Contents.
4. Compile everything into the final PDF.

### Key Files
- **main.tex**: Defines the PDF structure.
- **tilics.cls**: Specifies styling and layout.
- **participants.tex**: Lists seminar participants.
- **Makefile**: Defines the rendering process

### Credits
Original code by Professor [Christian Tschudin](mailto:christian.tschudin@unibas.ch), adapted by Repo Team 2024 for GitHub Actions.