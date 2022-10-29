const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]

let currentId = 10

// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

const task1 = function () {

    let result = enterprises.map(enterprise => {

        let departments = enterprise.departments
            .map(department => `- ${department.name} (${department.employees_count} сотрудников)`)
            .join('\n')
        return `${enterprise.name} (${enterprise.departments
            .map(department => department.employees_count)
            .reduce((accumulator, curr) => accumulator + curr)} сотрудников)\n${departments}`
    }).join('\n').replaceAll(/\(0 сотрудников\)/g, '(нет сотрудников)')

    console.log(result)
}

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

const getEnterpriseName = function (departmentId) {
    return enterprises.find(
        enterprise => enterprise.departments.find(department => department.id == departmentId) != undefined
    ).name
}

console.log(getEnterpriseName(4))

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

const addEnterprise = function (enterpriseName) {
    currentId++
    const newEnterprise = {
        id: currentId,
        name: enterpriseName,
        departments: new Array()
    }
    enterprises.push(newEnterprise)
}

addEnterprise('Название нового предприятия')

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

const addDepartment = function (enterpriseId, departmentName) {
    currentId++
    const newDepartment = {
        id: currentId,
        name: departmentName,
        employees_count: 0,
    }
    enterprises.find(e => e.id == enterpriseId).departments.push(newDepartment)
}

addDepartment(1, 'Название нового отдела')