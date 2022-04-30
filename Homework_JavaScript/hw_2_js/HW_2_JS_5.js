// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

vowlos = new Set(["A", "E", "I", "O", "U", "Y"]);
consonats = new Set(["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"]);

const word = function (str) {
    let array = String(str).split("")
    let numberOfVowlos = 0
    let numberOfConsonats = 0
    for (let i = 0; i < array.length; i++) {
        if (vowlos.has(array[i].toUpperCase())) {
            numberOfVowlos++
        }
        if (consonats.has(array[i].toUpperCase())) {
            numberOfConsonats++
        }
    }
    console.log(`Слово ${str} состоит из ${numberOfVowlos} гласных и ${numberOfConsonats} согласных букв`)
}
word("Check-list")