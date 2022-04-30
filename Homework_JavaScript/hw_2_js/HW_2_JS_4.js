// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

const str_HW = function (str, number) {
    let result = String(str)
    for (let i = 0; i < number; i++) {
        console.log(result)
        result += str
    }
}
str_HW(":)", 5)