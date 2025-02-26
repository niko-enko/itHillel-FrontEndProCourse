let hryvnaRate = 26;
console.log(`Обмінний курс: ${hryvnaRate} грн./дол.`);

for (let i = 10; i <= 100; i += 10) {
	console.log(`${i}$ за цим обмінним курсом будуть коштувати ${i * hryvnaRate} грн.`);
}
