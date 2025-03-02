let n = +prompt('Введіть будь яке число');

if (n < 1) {
	console.log('Шкода що ви не ввели число. Може іншим разом');
} else if (isNaN(n)) {
	console.log('Помилка! Вводьте лише числа у поле');
} else {
	let isSimple = true;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			isSimple = false;
			break;
		}
	}
	
	if (isSimple) {
		console.log(`Число ${n} - просте`);
	} else {
		console.log(`Число ${n} - непросте`);
	}
}
