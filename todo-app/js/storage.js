const TODO_LIST = 'todoList';

function getTodoList() {
    let todoListString = localStorage.getItem(TODO_LIST);

    let todoList = [];

    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }

    return todoList
}

function saveTodo(todo) {
    // todo example: {id: num, content: string, completed: bool}
    let todoList = getTodoList();

    if (todo) {
        todoList.push(todo);

        let todoListString = JSON.stringify(todoList);
        localStorage.setItem(TODO_LIST, todoListString);
    }
}

function deleteTodo(id) {
    let todoList = getTodoList();

    let todoIndex = todoList.findIndex(todo => {
        return todo.id === id
    });

    todoList.splice(todoIndex, 1);

    let todoListString = JSON.stringify(todoList);
    localStorage.setItem(TODO_LIST, todoListString);
}

function updateTodo(id) {
    let todoList = getTodoList();

    let todoIndex = todoList.findIndex(todo => {
        return todo.id === id
    });

    if (todoList[todoIndex].completed) {
        todoList[todoIndex].completed = false;
    } else {
        todoList[todoIndex].completed = true;
    }

    let todoListString = JSON.stringify(todoList);
    localStorage.setItem(TODO_LIST, todoListString);
}

function clearTodoList() {
    localStorage.setItem(TODO_LIST, []);
}

export default {
    getTodoList,
    saveTodo,
    deleteTodo,
    updateTodo,
    clearTodoList
}