// Задание HW_1.2*
const checkAge_HW_2 = function(age){
    if (typeof(age) != "number"){
        throw new Error('Ошибка!')
    }

    let age_2 = 18
    let age_3 = 60

if (age < age_2) {
    console.log("You don't have access cause your age is " + age + " It’s less then ")
} else if (age >= age_2 && age < age_3) {
    console.log("Welcome !")
} else if (age > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}
}
checkAge_HW_2(17)
checkAge_HW_2(18)
checkAge_HW_2(61)
// checkAge_HW_2('Число1')