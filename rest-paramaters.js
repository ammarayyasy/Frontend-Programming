const sum = (...numbers) => {
    let hasil = 0;
    for (const number of numbers) {
        hasil += number;
    }

    return hasil;
} 

console.log(sum(2,5,6,3,7,));