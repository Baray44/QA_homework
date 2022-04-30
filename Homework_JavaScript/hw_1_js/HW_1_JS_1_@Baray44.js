// Задание HW_1.1*
const checkAge_HW_1 = function(age){
    let age_2 = 18
    let age_3 = 60

if (age < age_2) {
    console.log("You don't have access cause your age is " + age + " It's less then ")
} else if (age >= age_2 && age < age_3) {
    console.log("Welcome !")
} else if (age > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}
}
checkAge_HW_1(17)
checkAge_HW_1(18)
checkAge_HW_1(61)