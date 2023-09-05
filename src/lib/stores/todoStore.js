import { writable } from 'svelte/store';

export const todos = writable([]);

export const addTodo = (/** @type {string} */ todo) => {
	todos.update((current) => {
		const newTodos = [...current, { content: todo, completed: false, id: Date.now() }];
		return newTodos;
	});
};

export const deleteTodo = (/** @type {number} */ id) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (/** @type {number} */ id) => {
	todos.update((todos) => {
		let index = null;
		for (let i = 0; i < todos.length; i += 1) {
			if (todos[i].id === id) {
				index = i;
			}
		}
		if (index !== null) {
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
