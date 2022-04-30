// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

const isPalindrom = function (str) {
    return String(str).toUpperCase() == String(str).toUpperCase().split("").reverse().join("")
}
console.log(isPalindrom("Tenet"))