let randomNum = Math.ceil((Math.random()*10));

let sign = prompt("Schätzen Sie eine Nummer zwischen 1 und 10")
console.log(sign);

if (sign == randomNum) {
    console.log("Du hast gewonnen! :)");
}else{
    console.log("Du hast verloren. Die Nummer ist " + randomNum);
}