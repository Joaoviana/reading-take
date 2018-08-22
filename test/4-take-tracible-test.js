let assert = require('tressa');
let cases = require('./test-cases.js');

let takeTracible = require('../4-take-tracible.js');

assert.title('takeTracible');

for (let cond of cases) {
	let pass = true;
	let actual = takeTracible(...cond.input);

	checking: for (let i = 0; i < actual.length; i++ ){
		if (actual[i] !== cond.expected[i]) {
			pass = false;
			break checking;
		};
	};
	
	assert(pass, cond.message);
};
