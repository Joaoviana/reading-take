
var base_slice = require('./base-slice');
var toInteger = require('./node_modules/lodash/toInteger');

function take(array, n, guard) {
    let result;
    if (check_array_invalid(array)) {
        result = [];
    }
   
    if (check_guard_and_number(guard, n)){
        n = 1;
    } else {
        n = toInteger(n);
    }// encapsulate into the check guard function?

    let end_pos = get_end_pos(n);

    result = base_slice(array, 0, end_pos);

    return result;
}

module.exports = take;

function check_array_invalid(array) {
    let result; 
    const step_1 = array && array.length;
    const step_2 = !step_1;
    result = step_2;
    return result;
};
let check_array_invalid_test_cases = [
    {input: [[1,2]], expected: false, message: "[[1,2]] -> { boolean: false}"}
];

function check_guard_and_number(guard,n) {
    let result;
    const step_1 = guard;
    const step_2 = n === undefined;
    const step_3 = step_1 || step_2;
    result = step_3;
    return result;
};
let check_guard_and_number_test_cases = [
    {input: ['', 3], expected: false, message: "['', 3] -> { boolean: false}"}
];

function get_end_pos(n){
    let result;
    if (n < 0) {
        result = 0;
    } else {
        result = n;
    }
    return result;
};

let get_end_pos_test_cases = [
    {input: [-1], expected: 0, message: "-1 -> { number: 0}"}
];