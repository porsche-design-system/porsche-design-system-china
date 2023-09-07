#!/bin/sh
ls | grep -v .ptoolsrc.js | grep -v .eslintrc | grep -e '.d.ts' -e '.js$' | xargs -r rm
# keep one d.ts to make vscode auto import working with corrcet path
#rm ./es/icons/*.d.ts || echo
