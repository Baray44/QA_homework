// function practice1(item_1, item_2) {
    
//     let mass = 'Hello!'
//     console.log(mass, item_1, item_2)
//     console.log(mass, item_1 + item_2)
// }

// // practice1(11, 22)

// function func1() {
//     console.log('Hello?')
// }

// let t1 = 10
// let t2 = 20

// let t3 = 30
// let t4 = 40


// let func2 = () => console.log('Hello.')
// let func3 = (t11, t22) => {console.log('Sum = ', t11 + t22)}

// let func4 = (t1 < t2) ?
//     (tt1, tt2) => console.log('order', tt1 + tt2) :
//     (tt1, tt2) => console.log('order', tt1 - tt2) ;

// func4(t3, t4)


function elochka() {};


elochka.prototype.fast = function () {
    console.log('FAST!')
}

elochka.prototype.green = function (sun, co2) {
    console.log('Green ==', sun, 'sun', ' + ', co2, 'co2')
}

elochka.prototype.shishki = function () {
    console.log('Shishki == Elki')
}

let forest = new elochka()

forest.fast()
forest.green(4500, 50)
forest.shishki()