const taskList = document.querySelector('#taskList');
const taskInputForm = document.querySelector('#taskInputForm');
const taskInput = document.querySelector('#taskInput')

const taskArr = [];

function createTask (taskName, id) {
    const li = document.createElement('li');
    li.id = `task-${id}`;
    li.innerHTML = `
            <input type="checkbox" name="taskIsDone" id="task-checkbox-${id}">
            <span class="task task__span" id="task-name-${id}">${taskName}</span>
            <button class="task task__btn">Видалити</button>
        `;
    return li;
}

// Display existed tasks on render IIFE
{
    const storedTasks = JSON.parse(sessionStorage.getItem('taskList')) || [];

    if (storedTasks && storedTasks.length > 0) {
        storedTasks.forEach(task => {
            taskArr.push(task)
            const existedTask = createTask(task.taskName, task.id)

            if (task.isDone) {
                existedTask.querySelector(`#task-checkbox-${task.id}`).checked = true
                existedTask.querySelector(`#task-name-${task.id}`).classList.add('task__span--done');
            }

            taskList.appendChild(existedTask)
        });

    }
}

function completeTask (id) {
    taskArr.find(task => task.id === id).isDone = true;
    document.querySelector(`#task-name-${id}`).classList.add('task__span--done');
    sessionStorage.setItem('taskList', JSON.stringify(taskArr));
}

function uncompleteTask (id) {
    taskArr.find(task => task.id === id).isDone = false;
    document.querySelector(`#task-name-${id}`).classList.remove('task__span--done');
    sessionStorage.setItem('taskList', JSON.stringify(taskArr));
}

function deleteTask (id) {
    taskArr.splice(taskArr.findIndex(task => task.id === id), 1);
    sessionStorage.setItem('taskList', JSON.stringify(taskArr));
}

taskList.addEventListener('click', (e) => {
    if (e.target.innerText === 'Видалити') {
        deleteTask (
            Number(e.target.parentElement.id.split('-')[1])
        )
        e.target.parentElement.remove()
    }
})

taskList.addEventListener('change', (e) => {
    const targetId = Number(e.target.id.split('-')[2])
    if (e.target.checked) {
        completeTask(targetId);
    } else {
        uncompleteTask(targetId)
    }
})

taskInputForm.addEventListener('click', (e) => {
    const inputValue = taskInput.value.trim();

    if (inputValue.trim()) {

        const taskElement = createTask(inputValue, taskArr.length);
        taskList.appendChild(taskElement);

        taskArr.push({
            id: taskArr.length,
            taskName: inputValue,
            isDone: false,
        })
        sessionStorage.setItem('taskList', JSON.stringify(taskArr))
    }
    taskInput.value = '';
})