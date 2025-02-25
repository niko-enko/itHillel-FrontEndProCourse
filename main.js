let number = +prompt('Введіть будь яке число');

if (number === 0) {
	console.log('Шкода, що ви відмовились. Може іншим разом');
} else if (isNaN(number)) {
	console.log('Помилка! Потрібно ввести число');
} else if (number < 100 || number > 999) {
	console.log('Помилка! Ви ввели не тризначне число');
} else {
	let d1 = ((number % 1000) - (number % 100)) / 100;
	let d2 = ((number % 100) - (number % 10)) / 10;
	let d3 = number % 10;

	switch (true) {
		case d1 === d2 && d1 === d3 && d2 === d3:
			console.log(`Всі цифри числа ${number} однакові`);
			break;
		case d1 == d2 || d1 === d3 || d2 == d3:
			console.log(`У числі ${number} є однакові цифри`);
			break;
		default:
			console.log(`У числі ${number} немає однакових цифр`);
	}
}
