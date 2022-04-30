// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const pow_HW = function (power) {
    for (let i = 1; i <= power; i++) {
        let result = Math.pow(2, i)
        console.log(result)
    }
}
pow_HW(10)