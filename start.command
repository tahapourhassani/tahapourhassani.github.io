#!/bin/zsh
cd "${0:A:h}"
export PATH="$PWD/../.tools/node-v24.22.2-darwin-arm64/bin:$PATH"
if ! command -v node >/dev/null; then
  print 'Node.js is missing. Ask your website assistant to restore the project tools.'
  read '?Press Return to close.'
  exit 1
fi
if [[ ! -d node_modules ]]; then
  npm ci || exit 1
fi
npm run dev -- --open
