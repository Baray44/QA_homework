// Task 2***

// Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

const fs = require('fs')
let fileContent = fs.readFileSync('QA_homework\\Homework_JavaScript\\hw_3_js\\task2.json', "utf8");

let arr = JSON.parse(fileContent)

const isUserEquals = function (user1, user2) {
    return user1.name == user2.name &&
        user1.username == user2.username &&
        user1.email == user2.email &&
        user1.phone == user2.phone
}

let result = new Array()

const addUser = function (items) {
    items.forEach(element => {
        if (result.find(u => isUserEquals(u, element)) == undefined) {
            result.push(element)
        } else {
            console.log('Такой элемент уже существует.')
        }
    });
}

addUser(arr)
console.log(result)