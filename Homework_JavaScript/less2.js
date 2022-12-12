/* console.log("1 -- " + true || true)
console.log("2 -- " + true || false)
console.log(false || true)

console.log(true && false)
console.log(true && true) */

let temperature = 0
// let item_2 = 20
// let item_3 = 50


// if (item_1 > 3 || item_2 < 15 && item_3 == 50) {
//     console.log("Hello")
// } else {
//     console.log("Bye")
// }

while(temperature < 40) {

    if (temperature < 10){
        console.log("temperature = ", temperature, "Cold")
} else if (temperature >= 10 && temperature < 30){
    console.log("temperature = ", temperature, "Good!")
} else {
    console.log("temperature = ", temperature, "Ass!!")
}
    temperature++
}