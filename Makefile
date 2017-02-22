install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

start-even:
	npm run babel-node -- src/bin/brain-even.js

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

publish:
	npm publish

make lint:
	npm run eslint
