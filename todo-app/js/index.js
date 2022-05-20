let tasksCont = document.getElementById('tasksCont');

let timestamp = Date.now();
let todo = {id: timestamp, content: 'something 231', completed: false};
let todoList = []
todoList.push(todo);
let todo1 = {id: timestamp, content: 'something 231', completed: false};
todoList.push(todo1);
localStorage.setItem('todoList', JSON.stringify(todoList));

function renderTasks() {
    let allTasks = localStorage.todoList;
    allTasks = JSON.parse(allTasks);

    allTasks.forEach(task => {
        let container = document.createElement('div');
        let inputEl = document.createElement('input');
        let pEl = document.createElement('p');
        let btnEl = document.createElement('button');

        inputEl.type = 'checkbox';
        inputEl.addEventListener('click', toogleCheckTask);

        pEl.textContent = task.content;

        btnEl.textContent = 'x';
        btnEl.addEventListener('click', removeTask);

        container.appendChild(inputEl);
        container.appendChild(pEl);
        container.appendChild(btnEl);

        tasksCont.appendChild(container);
    });
}

renderTasks();

function toogleCheckTask(e) {
    let parentEl = e.target.parentElement;
    console.log(parentEl.childNodes);
    parentEl.childNodes[1].classList.toggle('checked');
}

function removeTask(e) {
    let parentEl = e.target.parentElement;
    parentEl.remove();
}