const arr = [1, 3, 4, 6, 2, 5, 7];

const itemToDel = 4;

function removeElement(array, item) {
    const indexOf = array.indexOf(item);
    if (indexOf > -1) {
        array.splice(indexOf, 1);
        return array;
    } else {
        return 'У масиві немає такого елементу'
    }
}

console.log('Масив до видалення значення:', arr);
console.log('Результат виконання removeElement',removeElement(arr, itemToDel));
