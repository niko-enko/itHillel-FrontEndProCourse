let name = prompt('Як вас звати?');

if (isNaN(name)) {
	console.log(`Вітаю ${name}! Як ваші справи?`);
} else {
	alert("Введено неправильне значення. Введіть ім'я українськими літерами");
}
