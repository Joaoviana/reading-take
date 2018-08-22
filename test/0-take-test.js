let assert = require('tressa');
let cases = require('./test-cases.js');

let take = require('../0-take.js');

assert.title('take');

for (let cond of cases) {
	let pass = true;
	let actual = take(...cond.input);

	checking: for (let i = 0; i < actual.length; i++ ){
		if (actual[i] !== cond.expected[i]) {
			pass = false;
			break checking;
		};
	};
	
	assert(pass, cond.message);
};
