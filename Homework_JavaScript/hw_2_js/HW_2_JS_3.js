// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let result = ":)"
for (let i = 0; i < 5; i++) {
    console.log(result)
    result += ":)"
}
// Вариант с двумя циклами
// for (let i = 0; i < 5; i++) {
//     let s = ":)"
//     for (let j = 0; j < i; j++) {
//         s+= ":)"
//     }
//     console.log(s)
// }