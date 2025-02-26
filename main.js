let n = +prompt('Введіть будь яке число');

if (n < 1) {
	console.log('Шкода що ви не ввели число. Може іншим разом');
} else if (isNaN(n)) {
	console.log('Помилка! Вводьте лише числа у поле');
} else {
	for (let i = 2; i <= 3; i++) {
		if (n > 3 && n % i === 0) {
			console.log(`Число ${n} - непросте`);
			break;
		} else if (i > 2) {
			console.log(`Число ${n} - просте`);
		}
	}
}
