function add(price1, price2) {
    const sum = price1 + price2;
    return sum;
}

const num = add(10, 50);
console.log(num);


function multiply(price1) {
    if (price1 % 2 === 0){
        return true;
    }else {
        return false;
    }

}

console.log(multiply(8)); 
console.log(multiply(110));