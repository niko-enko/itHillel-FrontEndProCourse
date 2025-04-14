function Student (firstName, lastName, birthYear) {
    let _firstName = firstName;
    let _lastName = lastName;
    let _birthYear = birthYear;
    let _lesson = 0;
    const _attendance = [...Array(25)];
    const _grades = [...Array(25)];

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return _firstName
        }
    })

    Object.defineProperty(this, 'lastName', {
        get: function () {
            return _lastName
        }
    })

    Object.defineProperty(this, 'birthYear', {
        get: function () {
            return _birthYear
        }
    })

    this.present = (grade) => {
        if (_lesson > 24) {
            console.error(`${_firstName} вже завершив курс занять!`);
            return;
        } else if (grade < 0 || grade > 100) {
            console.error('Оцінка має бути у діапазоні 0-100');
            return;
        }

        _attendance[_lesson] = true;
        _grades[_lesson] = grade

        console.log(`Студент ${_firstName} ${_lastName} був присутній на занятті № ${_lesson + 1} та отримав оціку ${grade}`)
        _lesson++;
    }

    this.absent = () => {
        if (_lesson > 24) {
            console.error(`${_firstName} вже завершив курс занять!`);
        }

        _attendance[_lesson] = false;
        console.log(`Студент ${_firstName} ${_lastName} був відсутній на занятті № ${_lesson + 1}`)
        _lesson++;
    }

    Object.defineProperty(this, 'avgGrade', {
        get () {
            const gradeSum = _grades.reduce((acc, grade) => acc + (grade || 0), 0)
            const markedGrade = _grades.filter(grade => typeof grade !== 'undefined');
            return Math.floor(gradeSum / markedGrade.length);
        }
    })

    this.summary = () => {
        const avgPresence = _attendance.filter(isPresent => isPresent).length / _attendance.length

        if (avgPresence >= 0.9 && this.avgGrade >= 90) {
            console.log('Молодець!')
        } else if (avgPresence >= 0.9 || this.avgGrade >= 90) {
            console.log('Добре, але можна краще!')
        } else {
            console.log('Редиска')
        }
    }
}

const student1 = new Student('Данило', 'Никоненко', 1997)
const student2 = new Student('Марина', 'Іванченко', 1980)

const absenceRatio = 0.5
const gradesScale = {
    max: 100,
    min: 60
}

for (let i = 0; i <= 24; i++) {
    const isAbsent = Math.random() < absenceRatio
    if (!isAbsent) {
        const grade = Math.floor(Math.random() * (gradesScale.max - gradesScale.min + 1)) + gradesScale.min;
        student1.present(grade)
    } else {
        student1.absent();
    }
}

console.log(student1.avgGrade)

student1.summary();

console.log(`Стедент № 2: ${student2.firstName} ${student2.lastName}`)