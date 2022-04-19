// Задание HW_1.3**
const checkAge_HW_3 = function (age) {
    let age_1 = Number(age)
    if (isNaN(age_1)) {
        throw new Error('Ошибка!')
    }

    let age_2 = 18
    let age_3 = 60

    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less then ")
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome !")
    } else if (age >= age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}
checkAge_HW_3(17)
checkAge_HW_3(18)
checkAge_HW_3(61)
// checkAge_HW_3('Число1')
checkAge_HW_3('2')
