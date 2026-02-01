function inchToFeet (inch) {
    const feet = inch / 12;
    return feet;
}

const shuvoHeight = inchToFeet (75);
console.log(shuvoHeight);


function mileTokilometer (mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const mileToKilometer = mile => mile * 1.60934;
console.log(mileToKilometer(5)); // 8.0467
