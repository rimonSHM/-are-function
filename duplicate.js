 

 const biryaniKhor = ['abul', 'babul', 'kabul', 'dabul', 'ebul', 'abul', "babul"];

 function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }

    return unique;
 }

 const uniqueArray = noDuplicate(biryaniKhor);
 console.log(uniqueArray);