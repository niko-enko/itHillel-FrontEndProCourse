let dateBirth = +prompt('Який ваш рік народження?');
let city = prompt('У якому місті ви мешкаєте? Наприклад: Київ, Лондон, Вашингтон тощо');
let sport = prompt('Який ваш улюблений вид спорту? Наприклад: футбол, теніс, волейбол тощо');

if (dateBirth === 0) {
	console.log('Шкода, що ви не захотіли ввести свою дату народження');
} else if (isNaN(dateBirth)) {
	alert('Помилка! Введіть рік народження цифрами');
	console.log(`Ви ввели ${dateBirth}. Це не підходяще значення`);
} else {
	console.log('Рік народження:', dateBirth, 'рік');
}

if (city === null) {
	console.log('Шкода, що ви не захотіли ввести своє місто');
} else if (!isNaN(city)) {
	alert('Помилка! Введіть місто українськими літерами');
	console.log(`Ви ввели ${city}. Це не підходяще значення`);
} else {
	switch (city) {
		case 'Київ':
			console.log('Ви мешкаєте у столиці України, місті', city);
			break;
		case 'Лондон':
			console.log('Ви мешкаєте у столиці Великобританії, місті', city);
			break;
		case 'Вашингтон':
			console.log('Ви мешкаєте у столиці США, місті', city);
			break;
		default:
			console.log('Ви мешкаєте у', city);
	}
}

if (sport === null) {
	console.log('Шкода, що ви не захотіли ввести свій улюблений спорт');
} else if (!isNaN(sport)) {
	alert('Помилка! Введіть назву спорту українськими літерами');
	console.log(`Ви ввели ${sport}. Це не підходяще значення`);
} else {
	switch (sport) {
		case 'футбол':
			console.log('Футбол? Круто! Хочеш стати як Андрій Шевченко?');
			break;
		case 'теніс':
			console.log('Теніс? Круто! Хочеш стати як Еліна Світоліна?');
			break;
		case 'волейбол':
			console.log('Волейбол? Круто! Хочеш стати Юлія Герасимова?');
			break;
		default:
			console.log('Ваш улюблений спорт це', sport);
	}
}
