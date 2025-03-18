const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const input = document.querySelector('input');
    const todoText = input.value.trim();

    if (!todoText) {
        alert("Please enter a valid To-Do!");
        return;
    }

    input.value = '';

    // Create new to-do item
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const todoContent = document.createElement('span');
    todoContent.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        todoItem.remove();
    });

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.addEventListener('click', () => {
        const newTodo = prompt('Update your To-Do:', todoContent.textContent);
        if (newTodo && newTodo.trim()) {
            todoContent.textContent = newTodo.trim();
        }
    });

    todoItem.appendChild(todoContent);
    todoItem.appendChild(updateBtn);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
});