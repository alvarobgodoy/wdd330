import ls from './storage.js'
import utilities from './utilities.js'

const addBtn = document.getElementById('addBtn');
const input = document.getElementById('input');
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    };
});
addBtn.onclick = addTask;

// filter
let currentCategory = 'all';
let allBtn = document.getElementById('allBtn');
allBtn.onclick = () => {changeCategory('all')};
let activeBtn = document.getElementById('activeBtn');
activeBtn.onclick = () => {changeCategory('active')};
let completedBtn = document.getElementById('completedBtn');
completedBtn.onclick = () => {changeCategory('completed')};

function loadTasks() {
    let parentEl = document.getElementById('tasksCont');
    parentEl.innerHTML = '';
    let todoList = ls.getTodoList();
    let length = todoList.length;
    document.getElementById('taskNum').textContent = length;

    todoList.forEach(todo => {
        if (currentCategory === 'active' && todo.completed === false) {
            parentEl.appendChild(utilities.createTaskElement(todo, removeTask, updateTask));
        } else if (currentCategory === 'completed' && todo.completed === true) {
            parentEl.appendChild(utilities.createTaskElement(todo, removeTask, updateTask));
        } else if (currentCategory === 'all') {
            parentEl.appendChild(utilities.createTaskElement(todo, removeTask, updateTask));
        }
    });
}

function addTask() {
    let content = input.value;
    if (content) {
        input.value = ''
        let timestamp = Date.now();
        let task = utilities.createTaskObject(timestamp, content);
        ls.saveTodo(task);
        loadTasks();
    }
}

function removeTask(id) {
    ls.deleteTodo(id);
    loadTasks();
}

function updateTask(id) {
    ls.updateTodo(id);
    loadTasks();
}

function changeCategory(category) {
    if (category === 'all') {
        currentCategory = 'all';
        allBtn.style.border = '1px solid #30363D';
        activeBtn.style.border = 'none';
        completedBtn.style.border = 'none';
    } else if (category === 'active') {
        currentCategory = 'active';
        allBtn.style.border = 'none';
        activeBtn.style.border = '1px solid #30363D';
        completedBtn.style.border = 'none';
    } else if (category === 'completed') {
        currentCategory = 'completed';
        allBtn.style.border = 'none';
        activeBtn.style.border = 'none';
        completedBtn.style.border = '1px solid #30363D';
    }
    loadTasks();
}

loadTasks();