{
    let args = {
        array: undefined,
        number: undefined,
        guard: undefined

    };

    let dep = {
        baseSlice: {
            args: {
                array: "The array to slice.", 
                start_pos: "The start position",
                end_pos: "The end position"
            },
            returns: {
                array: "Returns the slice of `array`"
            },
            behaviour: "The base implementation of `_.slice` without an iteratee call guard"
        },
        toInteger: {
			args: {
				anything: "the value to convert"
			},
			returns: {
				number: "the converted integer"
			},
			behavior: "Converts `value` to an integer."
		}
    };
    let closure = {
        check_array_invalid: function(array) {
            let result; 
            const step_1 = array && array.length;
            const step_2 = !step_1;
            result = step_2;
            return result;
        },
        check_guard_and_number: function(guard, n) {
            let result;
            const step_1 = guard;
            const step_2 = n === undefined;
            const step_3 = step_1 || step_2;
            result = step_3;
            return result;
        },
        get_end_pos: function (n){
            let result;
            if (number < 0) {
                n = 0;
            } else {
                result = n;
            }
            return result;
        }

    };

    let ret_val;

    take: {
        if (check_array_invalid(args.array)) {
            ret_val = [];
        }
       
        if (check_guard_and_number(args.guard, args.number)){
            args.number = 1;
        } else {
            args.number = dep.toInteger(args.number);
        }// encapsulate into the check guard function?

        let end_pos = get_end_pos(args.number);

        ret_val = dep.baseSlice(args.array, 0, end_pos );

        break take;
    };

};
