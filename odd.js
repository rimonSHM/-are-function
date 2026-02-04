function oddAverage(numbers) {

    for (const number of numbers) {
        console.log(number);
    }

}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const avg = oddAverage(numbers);
console.log("average of odd numbers is:", avg);