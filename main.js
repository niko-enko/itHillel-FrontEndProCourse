let n = +prompt('Введіть будь яке число');

if (n < 1) {
	console.log('Шкода що ви не ввели число. Може іншим разом');
} else if (isNaN(n)) {
	console.log('Помилка! Вводьте лише числа у поле');
} else {
	let result = '';

	for (let i = 1; i <= 100; i++) {
		if (i ** 2 > n) {
			break;
		}
		result += i + ', ';
	}

	console.log(`Цілі числа від 1 до 100, квадрат яких не перевищує ${n}:`, result);
}
