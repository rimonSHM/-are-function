function evenSize(size) {
    const str = size.length;
    console.log(size, str);
    if (str % 2 ===0) {
        console.log("even size");
        return true;
    }
    else {
        console.log("ood size");
        return false;
    }
    
}

// evenSize("Dhaka");
// evenSize("faka");

function oddSize(number, odDouble) {
    if (odDouble === true) {
        const result = number * 2;
        return result;
    }else {
        const result = number * 3;
        return result;
    }
}

console.log(oddSize(5, true));
console.log(oddSize(5, false));