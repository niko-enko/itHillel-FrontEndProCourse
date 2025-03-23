const pifagorTable = document.querySelector('#table');
const inputField = document.querySelector('#toWhichNumber');
const addBtn = document.querySelector('#addTable');

function createPifagorTable(toNumber) {
    const table = document.createElement('table');

    // Цикл створення рядків
    for (let i = 0; i <= toNumber; i++) {
        const row = document.createElement('tr');

        // Цикл створення клітинок
        for (let j = 0; j <= toNumber; j++) {
            const cell = document.createElement('td');
            const header = document.createElement('th');

            cell.classList.add('tableCell', 'tableRegular');
            header.classList.add('tableCell', 'tableHeader');

            let type;
            let value;

            if (i === 0) {
                type = header;
                value = j === 0 ? '' : j;
            } else if (j === 0) {
                type = header;
                value = i + j;
            } else {
                type = cell;
                value = i * j;
                i === j ? cell.classList.add('tableCellEqual') : '';
            }

            row.appendChild(type).innerHTML = value;

        }
        table.appendChild(row);
    }
    pifagorTable.appendChild(table);

}

addBtn.addEventListener('click', () => createPifagorTable(inputField.value));