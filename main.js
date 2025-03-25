const taskList = document.querySelector('#taskList');
const taskInputForm = document.querySelector('#taskInputForm');
const taskInput = document.querySelector('#taskInput')

taskList.addEventListener('click', (e) => {
    e.target.innerText === 'X'
        ? e.target.parentElement.remove()
        : null;
})

taskInputForm.addEventListener('click', (e) => {
    const inputValue = taskInput.value.trim();
    if (inputValue.trim()) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task task__span">${inputValue}</span>
            <button class="task task__btn">X</button>
        `;
        taskList.appendChild(li);
    }
    taskInput.value = '';
})