window.onload = init;

function init() {
    result = prompt("Введите возраст:");
    alert(checkAge_HW_4(result));
}

const checkAge_HW_4 = function (age) {

    let age_1 = Number(age)
    if (isNaN(age_1)) {
        return 'Ошибка!'
    }

    let age_2 = 18
    let age_3 = 60

    if (age < age_2) {
        return "You don't have access cause your age is " + age + " It’s less then "
    } else if (age >= age_2 && age < age_3) {
        return "Welcome !"
    } else if (age > age_3) {
        return "Keep calm and look Culture channel"
    } else {
        return "Technical work"
    }
}