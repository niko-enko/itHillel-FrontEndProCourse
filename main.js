let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}],
    },
    helpDesk: [{name: 'Danylo', salary: 2000}, {name: 'Alex', salary: 500}],
    managment: {
        upper: [{name: 'John', salary: 3000}, {name: 'Alex', salary: 2500}],
        middle: {
            hr: [{name: 'Mary', salary: 1300}],
            maintenance: [{name: 'David', salary: 1000}],
        },
        lower: [{name: 'Mark', salary: 800}],
    }
};

function sumOfSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((acc, worker) => acc + worker.salary, 0);
    }

    return Object
        .values(department)
        .reduce((acc, subDep) =>
            acc + sumOfSalaries(subDep),
            0
        );
}

console.log('Сума зарплат компанії складає:', sumOfSalaries(company));
