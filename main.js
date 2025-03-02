function average(arr) {
	let numbers = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			console.log(`Елемент масиву ${arr[i]} - не номер`);
			continue;
		}
		numbers.push(Number(arr[i]));
	}
	let sum = 0;
	for (let j = 0; j < numbers.length; j++) {
		sum += numbers[j];
	}

	return sum / numbers.length;
}

const values = [1, '25', 'Данило', false, 33, 'Вісімдесят два', 82.5, 'jfadkl', true];
console.log(average(values));
