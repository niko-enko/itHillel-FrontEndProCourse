function reciveInput () {
    let result;
    for (let i = 1; i < 11; i++) {
        const uInput = Number(prompt('Введіть число більше 100'));
        if (isNaN(uInput)) {
            alert('Ви ввели рядкове значення. Потрібно ввести число');
            continue;
        } else if (uInput < 100) {
            alert(`Ви ввели число ${uInput}, що менше 100. Введіть нове число.`)
            continue;
        } else {
            result = uInput;
            break;
        }
    }
    if (result === undefined) {
        result="Ми так і не отримали від вас потрібне число. Може іншим разом";
    }
    return result;
}

console.log(reciveInput());