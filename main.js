let numOrStr = prompt('Введіть число або рядок');
console.log(numOrStr);

switch (true) {
	case numOrStr === null:
		console.log('Ви скасували');
		break;
	case numOrStr === '':
		console.log('Пустий рядок');
		break;
	case isNaN(numOrStr):
		console.log('Номер це Ba_NaN');
		break;
	default:
		console.log('OK');
}
