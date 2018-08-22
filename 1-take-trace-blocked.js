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

    let ret_val;

    take: {
        let condition_1;
        {
            const step_1 = args.array && args.array.length;
            const step_2 = !step_1;
            condition_1 = step_2;
        }

        if (condition_1) {
            ret_val = [];
        }
        
        let condition_2;
        {
            const step_1 = args.guard;
            const step_2 = args.number === undefined;
            const step_3 = step_1 || step_2;
            condition_2 = step_3;
        }

        if (condition_2){
            args.number = 1;
        } else {
            args.number = dep.toInteger(args.number);
        }

        let end_pos;
        
        if (args.number < 0) {
            end_pos = 0;
        } else {
            end_pos = args.number;
        }

        ret_val = dep.baseSlice(args.array, 0, end_pos );

        break take;
    };

};
