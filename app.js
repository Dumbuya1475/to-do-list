document.addEventListener('DOMContentLoaded', () => {
	const todoForm = document.getElementById('todoForm');
	const todoList = document.getElementById('todoList');
	const errMsg = document.getElementById('errMsg');
	const addTaskInput = document.getElementById('addTaskInput');


	// let todoLi; // set toList outside function scope
	let tasks = []
	todoForm.addEventListener('submit', (e) => {
		e.preventDefault();
		addTodoFunction() // calling addTodoFunction
	})

	function addTodoFunction() {
		const todoName = addTaskInput.value.trim();

		if (todoName !== '') {
			const newTask = {
				id: Date.now(),
				task_name: todoName,
			};
			tasks.push(newTask);
			saveTaskToLocalStorage();

			addTaskInput.value = '';
			addTaskInput.focus()
		} else {
			console.log('I am empty')
		}
	}

	function renderTasks() {

		tasks.forEach(task => {
			const todoLi = document.createElement('li');
			const deleteBtn = document.createElement('button')
			const editBtn = document.createElement('button')
			const interactive = document.createElement('div')

			// add class to element
			deleteBtn.classList.add('delete-btn');
			editBtn.classList.add('edit-btn');
			interactive.classList.add('interactive')
			// add content to element
			todoLi.textContent = todoName;
			deleteBtn.textContent = 'Delete'
			editBtn.textContent = 'Edit'

			// append elements
			todoList.appendChild(todoLi);
			todoLi.appendChild(interactive)
			interactive.append(editBtn, deleteBtn)
			console.log('I am not empty');

			deleteBtn.addEventListener('click', () => {
				todoLi.remove()

			})

		})
	}
}

