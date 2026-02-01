

function arrayForm(input) {
    let tolal = 0;
    for(const number of input) {
        console.log(number);
        tolal += number;
        
    }

    return tolal;
}

const nums = [1, 2, 3, 4, 5];

const sum = arrayForm(nums);
console.log("Sum of number is", sum)