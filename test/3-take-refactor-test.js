let assert = require('tressa');
let cases = require('./test-cases.js');

let takeRefactor = require('../3-take-refactor.js');

assert.title('takeRefactor');

for (let cond of cases) {
	let pass = true;
	let actual = takeRefactor(...cond.input);

	checking: for (let i = 0; i < actual.length; i++ ){
		if (actual[i] !== cond.expected[i]) {
			pass = false;
			break checking;
		};
	};
	
	assert(pass, cond.message);
};
