let test_cases = [
	{input: [[1,2,3]], expected: [1], message: "'[1, 2, 3]' -> [1]"},
	{input: [[1, 2, 3],2], expected: [1,2], message: "'[1, 2, 3], 2' -> [1,2]"},
	{input: [[1, 2, 3],5], expected: [1,2,3], message: "'[1, 2, 3], 5' -> [1,2,3]"},
	{input: [[1, 2, 3], 0], expected: [], message: "'[1, 2, 3], 0' -> []"},
	{input: [[1, 2, 3], ' '], expected: [], message: "'[1, 2, 3], ' '' -> []"},
	{input: [[1, 2, 3], '2'], expected: [1,2], message: "'[1, 2, 3], '2'' -> [1,2]"},
	{input: [[1, 2, 3], 2.5], expected: [1,2] , message: "'[1, 2, 3], 2.5' -> [1,2] "},
	{input: [[1, 2, 3], 2.9], expected: [1,2] , message: "'[1, 2, 3], 2.9' -> [1,2] "},
	{input: [(1,2), 1], expected: [] , message: "'(1,2), 1' -> [] "},
	{input: [1, 1], expected: [] , message: "'1, 1' -> [] "},
	{input: ['[1,2]', 1], expected: ['[']  , message: "''[1,2]', 1' -> ['[']  "},
];

module.exports = test_cases;