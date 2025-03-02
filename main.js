function removeCharFromString(str, charToDelete) {
	let output = str;
	for (let i = 0; i < charToDelete.length; i++) {
		if (!output.includes(charToDelete[i])) {
			console.log(`Літери ${charToDelete[i]} немає у рядку. Пропускаємо`);
			continue;
		}
		output = output.replaceAll(charToDelete[i], '');
	}
	return output;
}

let userInput = prompt('Введіть текст').toLowerCase();
let charsToDel = prompt('Введіть символи (через пробіл) які потрібно видалити')
	.toLowerCase()
	.split(' ');

console.log(removeCharFromString(userInput, charsToDel));
