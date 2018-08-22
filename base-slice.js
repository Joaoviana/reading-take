
function base_slice(array, start, end) {
    var length = array.length;

    if (start < 0) {
        if (-start > length){
            start = 0;
        } else {
            start = start + length;
        }
    }

    if (end > length){
        end = length;
    } else {
        end = end;
    }

    if (end < 0){
        end = end + length;
    }

    if (start > end){
        length = 0;
    } else {
        const step_1 = end - start;
        const step_2 = step_1 >>> 0;
        length = step_2;
    }

    start >>>= 0;
  
    var result = Array(length);
    for (let index = 0; index < result.length; index++) {
        result[index] = array[index + start];
    }
    
    return result;
  }
  
  module.exports = base_slice;
  