
const roundTo = (Zahl, Genauigkeit) =>{
    return Number.parseFloat(Zahl).toFixed(Genauigkeit);
}

console.log(roundTo(3.1415926535, 5)); // 3.14159

console.log(roundTo(379.5479845, 2));