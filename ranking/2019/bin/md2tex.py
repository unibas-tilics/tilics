#!/usr/bin/env python3

import re
import subprocess as sp
import sys

FN = sys.argv[1] + '/txt.md'

title=None


isBody = False
body=''
with open(FN, 'r') as f:
    for ln in f:
        if '# ' == ln[:2]:
            if not title:
                title = ln[2:-1]
                title.strip()
                print('\\mytopic{' + title + '}\n')
            continue
        if '<!-- BEGIN BODY -->' in ln:
            isBody = True
            continue
        elif '<!-- END BODY -->' in ln:
            isBody = False
            continue

        if isBody:
            body += ln

p = sp.Popen(['pandoc', '-f', 'markdown', '-t', 'latex', '--wrap=preserve'],
             stdout=sp.PIPE, stdin=sp.PIPE, stderr=sp.STDOUT)

# print(body)

latex = p.communicate(input=body.encode('utf8'))[0].decode('utf8')

# Clean LaTeX:
latex = re.sub(r'\\tightlist\n', r'', latex) # remove \tightlist
latex = re.sub(r'\\item\n\s+', r'\t\\item ', latex) # join \item with its text on a single line; also put tabs in front of \item
latex = re.sub(r'\\label.*', r'', latex) # remove all LaTeX labels
latex = re.sub(r'_', r'\\_', latex) # remove all LaTeX labels

print(latex)

# eof
