function createTaskElement(task, removeFunction, updateFunction) {
    let container = document.createElement('div');
    let inputEl = document.createElement('input');
    let pEl = document.createElement('p');
    let btnEl = document.createElement('button');

    inputEl.type = 'checkbox';
    inputEl.addEventListener('click', () => {updateFunction(task.id)});

    pEl.textContent = task.content;

    btnEl.textContent = 'x';
    btnEl.addEventListener('click', () => {removeFunction(task.id)});

    container.appendChild(inputEl);
    container.appendChild(pEl);
    container.appendChild(btnEl);
    container.dataset.id = task.id;

    if (task.completed) {
        inputEl.checked = true;
        pEl.classList.add('checked');
    } else {
        inputEl.checked = false;
        pEl.classList.remove('checked');
    }

    return container
}

function createTaskObject(id, content) {
    let task = {};
    task.id = id;
    task.content = content;
    task.completed = false;
    return task
}

export default {
    createTaskElement,
    createTaskObject
}